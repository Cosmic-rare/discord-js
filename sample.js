module.exports = function(userId) {
    const crypto = require('crypto');
    const now = Date.now();
    const random = Math.round(Math.random()*10000000000);

    const str = String(userId) + String(random) + String(now);
    return crypto.createHash('sha256').update(str, 'utf8').digest('hex');
}
