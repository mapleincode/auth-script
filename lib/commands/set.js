'use strict';

module.exports = function(varialbe, name, value) {
    if(value === '{}') {
        value = {};
    }
    return varialbe.set(name, value);
}