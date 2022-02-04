function extractPrefixFromPartnersDomain(domain) {
    const domainParts = domain.split('.');
    
    if (!domainParts.length) {
        throw new Error('no domain passed');
    }
    // else

    return domainParts[0];
}

module.exports = {
    extractPrefixFromPartnersDomain,
}