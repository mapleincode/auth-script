'use strict';

const _ = require('lodash');

module.exports = function(varialbe, body, name) {
    return _.get(body, name);
};
