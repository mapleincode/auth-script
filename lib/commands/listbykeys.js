'use strict';

module.exports = function(varialbe, keys, object, spilt = '') {
    return keys.map(key => `${key}${spilt}${object[key]}`);
};
