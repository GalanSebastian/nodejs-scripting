const fetch = require('node-fetch');
const { RETRIES_ON_ERROR } = require('../settings');

function fetcher(url, settings = {}, includeCfHeaders = true) {
    
    console.log(process.env.DOMAIN_NAME)
    console.log(process.env.API_GATEWAY)
    console.log(process.env.API_AUTH_EMAIL)
    console.log(process.env.API_AUTH_KEY)
    console.log(process.env)

    const defaultHeaders = {
        'X-Auth-Email': process.env.API_AUTH_EMAIL,
        'X-Auth-Key': process.env.API_AUTH_KEY,
        'Content-Type': 'application/json',
    }

    if (includeCfHeaders) {
        if (settings.headers) {
            const headers = settings.headers;
            settings.headers = { ...defaultHeaders, ...headers };
        } else {
            settings.headers = { ...defaultHeaders };
        }
    }

    return fetch(url, settings)
        .then((raw) => raw.json())
        .catch(error => error);
}

// if fetch fails 1 time, it will be called RETRIES_ON_ERROR amount of times more
function retryOnError(url, settings) {
    let counter = 0;
    return async function retry() {
        try {
            return await fetcher(url, settings);
        } catch(error) {
            console.error(error);
            return (counter++ < RETRIES_ON_ERROR) ? retry() : error;
        }
    }
}

module.exports = retryOnError;