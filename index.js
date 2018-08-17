'use strict';

const fs = require('fs');
const path = require('path');

const Variable = require('./lib/variable');
const requireCommands = require('./lib/require_commands');

function format(commands) {
    const cmds = commands.split('\n').map(cmd => cmd.split(' '));
    return cmds;
}

function done(data = {}, commands) {
    const variable = new Variable(data);
    
    const cmds = format(commands);
    console.log(cmds);
};

exports.done = done;
