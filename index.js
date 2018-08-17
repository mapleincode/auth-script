'use strict';

const fs = require('fs');
const path = require('path');

const Variable = require('./lib/variable');
const requireCommands = require('./lib/require_commands');

function format(commands) {
    const cmds = commands.split('\n');

    const realCmds = [];

    for(cmd of cmds) {
        if(cmd[0] === '#') {
            continue;
        }

        if(cmd.indexOf([]))
    }

    return cmds;
}

function done(data = {}, commands) {
    const variable = new Variable(data);
    
    const cmds = format(commands);
    console.log(cmds);
};

exports.done = done;
