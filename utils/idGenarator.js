var crypto = require('crypto');
exports.generate =  () => {
    return crypto.randomBytes(30).toString('hex');
}