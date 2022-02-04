const { CF_API_ROOT_URL } = require('../settings');
const { CloudflareApiError } = require('./../utils/CloudflareApiError');
const fetch = require('./../utils/fetch');

function getZoneId(domain) {

    function checkApiError(data) {
        if (!data || !Array.isArray(data.result) || !data.result.length) {
            throw new CloudflareApiError('check please domain name correction');
        }
        // else

        return data;
    }

    const fetcher = fetch(`${CF_API_ROOT_URL}?name=${domain}&status=active&match=all`, { method: 'GET' });
    return fetcher().then(checkApiError);
}

module.exports = {
    getZoneId,
}