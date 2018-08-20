'use strict';

const crypto = require('crypto');

module.exports = function(varialbe, str, encoding = 'utf-8') {
    return crypto.createHash('md5').update(str, encoding).digest('hex');
};
