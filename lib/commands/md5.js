'use strict';

const crypto = require('crypto');

module.export = function(str, encoding = 'utf-8') {
    return crypto.createHash('md5').update(str, encoding).digest('hex');
};
