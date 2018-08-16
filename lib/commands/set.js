'use strict';

const varialbe = require('../variable');

module.exports = function(name, value) {
    return varialbe.set(name, value);
}