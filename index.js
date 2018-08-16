'use strict';

const fs = require('fs');
const path = require('path');

const Variable = require('./lib/variable');
const requireCommands = require('./lib/require_commands');

function done(data = {}, commands, defined) {
    // const {
    //     query,
    //     body,
    //     headers
    // } = data;

    const variable = new Variable(data);

    
};

exports.done = done;
