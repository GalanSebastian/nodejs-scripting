const { CloudflareApiError } = require('./../utils/CloudflareApiError');

function extractZoneId(data) {
    if (!data || !Array.isArray(data.result)) {
        throw new CloudflareApiError('data.result has inalid format, should be array instead');
    }
    // else

    if (data.result.length > 1) {
        throw new CloudflareApiError('the domain was already created by someone else');
    }
    // else
    
    return data.result[0].id;
}

module.exports = {
    extractZoneId,
}