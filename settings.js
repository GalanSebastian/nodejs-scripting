const CF_API_ROOT_URL = 'https://api.cloudflare.com/client/v4/zones';

const PRODUCTION = 'production';
const STAGING = 'staging';
const STAGE = 'stage';
const DEV = 'dev';
const DR = 'dr';

const DOMAIN_CREATION_UPDATE_POSTFIX = 'setting/domain/creation/update/';

const AWS_MS_NOTIFICATION_API_URL = {
    [DEV]: `https://4c6bfk7h67.execute-api.us-east-1.amazonaws.com/dev/${DOMAIN_CREATION_UPDATE_POSTFIX}`,
    [STAGING]: `https://3eqq307w2g.execute-api.us-east-1.amazonaws.com/stage/${DOMAIN_CREATION_UPDATE_POSTFIX}`,
    [PRODUCTION]: `https://api.honesttopaws.com/${DOMAIN_CREATION_UPDATE_POSTFIX}`,
}

const CIQ_PARTNERS_DOMAIN = 'ciq-partners.com';
const RETRIES_ON_ERROR = 5;

const API_ERROR_CODES = {
    DNS_RECORD_EXISTS: 81053,
    WORKERS_DUPLICATE_ROUTE: 10020,
    PAGE_RULE: {
        EXISTING: 1,
        VALIDATION_FAILED: 1004,
    },
};

module.exports = {
    CF_API_ROOT_URL,
    API_ERROR_CODES,
    PRODUCTION,
    DR,
    DEV,
    STAGE,
    STAGING,
    RETRIES_ON_ERROR,
    CIQ_PARTNERS_DOMAIN,
    AWS_MS_NOTIFICATION_API_URL, 
};