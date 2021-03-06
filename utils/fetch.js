const fetch = require('node-fetch');
const { RETRIES_ON_ERROR } = require('../settings');

function fetcher(url, settings = {}, includeCfHeaders = true) {
    
    const defaultHeaders = {
        'X-Auth-Email': process.env.user,
        'X-Auth-Key': process.env.pass,
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