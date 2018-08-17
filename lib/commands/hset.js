'use strict';

const _ = require('lodash');

module.exports = function(body, name) {
    return _.get(body, name);
};
