'use strict';

const moment = require('moment');

module.exports = function(varialbe, millisecond) {
    return millisecond ? Date.now() : moment().unix();
};
