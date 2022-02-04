class CloudflareApiError extends Error {
    constructor(message, ...args) {
        super(message, ...args);
        
        this.message = this.stringifyMessage(message);
        this.name = 'CloudflareAPIError';

        Error.captureStackTrace(this, this.constructor);
    }

    stringifyMessage(message) {
        if (typeof message === 'string') {
            return message;
        }
        // else
        
        return JSON.stringify(message);
    }
}

module.exports = { CloudflareApiError };