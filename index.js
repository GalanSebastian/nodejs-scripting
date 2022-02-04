require('dotenv').config();

const { getZoneId } = require('./lib/getZoneId');

const { detectEnvironment } = require('./utils/detectEnviromentType');
const { extractZoneId } = require('./utils/extractZoneId');
const { removeEnvironmentPrefixFromDomain } = require('./utils/removeEnvironmentPrefixFromDomain');
const { extractPrefixFromPartnersDomain } = require('./utils/extractPrefixFromPartnersDomain');

const { CIQ_PARTNERS_DOMAIN, PRODUCTION, DR } = require('./settings');

(async function() {
    const domain = process.env.DOMAIN_NAME;
    
    try {
        const env = detectEnvironment(domain);

        // we don't do updates for DR env
        if (env === DR) {
            const message = 'DR env is not needed to be updated in Cloudflare for now';
            return await notifyCiqSettingApi({ domain, env, error: message, isReady: true });
        }
        // // else 

        const customOriginServer = process.env.CUSTOM_ORIGIN_SERVER || '';

        const isPartnersSubdomain = Boolean(customOriginServer);
        const host = isPartnersSubdomain ? CIQ_PARTNERS_DOMAIN : removeEnvironmentPrefixFromDomain(domain);

        const results = await getZoneId(host);

         // get zone id
        const zoneId = extractZoneId(results);

        console.log(zoneId);

    } catch(error) {
        const message = `${error.name} | ${error.message}`;
        console.error('message');
    }
})();
