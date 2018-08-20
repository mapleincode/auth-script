'use strict';

const _ = require('lodash');

module.exports = function(varialbe, data, name, value) {
    return _.set(data, name, value);
};
