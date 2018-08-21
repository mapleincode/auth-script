'use strict';

const crypto = require('crypto');

module.exports = function(v, privateSecret, str, encoding = 'base64', strEncoding = 'utf-8') {
    return crypto.createSign('RSA-SHA1').update(str, strEncoding).sign(privateSecret, encoding);
};
