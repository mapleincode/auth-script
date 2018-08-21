'use strict';

module.exports = function(varialbe, str, encoding) {
    encoding = encoding || 'utf-8';
    return Buffer.from(str, encoding).toString('base64');
}