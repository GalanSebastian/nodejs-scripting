const { DEV, STAGE, STAGING } = require("../settings");

function removeEnvironmentPrefixFromDomain(domain) {
    const envRegEx = new RegExp(`${DEV}[\.-]|${STAGING}[\.-]|${STAGE}[\.-]`);
    return domain.replace(envRegEx, '');
}

module.exports = {
    removeEnvironmentPrefixFromDomain,
}