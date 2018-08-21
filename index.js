'use strict';

const Variable = require('./lib/variable'); // 变量集合
const CMD = require('./lib/CMD'); // CMD 集合

class AutoSign {
    constructor(cmds) {
        this.cmds = this.init(cmds);
    }

    init(commands) {
        const cmds = commands.split('\n').map(cmd => cmd.trim()).filter(cmd => !!cmd);
        const realCmds = cmds.map(cmd => new CMD(cmd)).filter(cmd => cmd.status);
        return realCmds;
    }

    done(data) {
        const variable = new Variable(data);
        for(const cmd of this.cmds) {
            cmd.setVariable(variable);
        }

        let result;

        for(const cmd of this.cmds) {
            result = cmd.run();
        }
        return result;
    }
}

module.exports = AutoSign;
