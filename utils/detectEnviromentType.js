const { DEV, STAGING, PRODUCTION, DR } = require('../settings');

function detectEnvironment(domain) {
    if (domain.includes(DEV)) {
        return DEV;
    }
    // else

    if (domain.includes(STAGING)) {
        return STAGING;
    }
    // else

    if (domain.includes(STAGE)) {
        return STAGING;
    }
    // else

    if (domain.startsWith(DR)) {
        return DR;
    }
    // else

    return PRODUCTION;
}

module.exports = {
    detectEnvironment,
}