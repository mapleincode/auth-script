'use strict';

const Variable = require('./lib/variable');

const CMD = require('./lib/CMD');

function format(commands, variable) {
    const cmds = commands.split('\n');
    const realCmds = cmds.map(cmd => new CMD(cmd, variable));
    return realCmds;
}

function done(data = {}, commands) {
    const variable = new Variable(data);
    
    const cmds = format(commands, variable);

    for(const cmd of cmds) {
        console.log(cmd.run());
    }
};

exports.done = done;
