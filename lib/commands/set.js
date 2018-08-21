'use strict';

module.exports = function(varialbe, name, value) {
    if(value === '{}') {
        value = {};
    } else if(value === '[]') {
        value = [];
    }
    return varialbe.set(name, value);
}