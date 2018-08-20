'use strict';

const debug = require('debug')('CMD');

const requireCommands = require('./require_commands');

class CMD {
    constructor(cmd, saved) {
        debug(`cmd: ${cmd}`);
        debug(`saved: ${saved}`);

        this._cmd = cmd;
        this._child = {};
        this._childArguNum = 0; 
        this._cmdString = '';
        this.saved = saved;
        this.cmds  = [];

        this.init();
        this.split(); 
    }

    init() {
        const cmd = this._cmd;

        let escapeStatus = false;
        let childCMDStatus = false;
        let realCMD = '';
        let childCMD = '';
        for(const char of cmd) {
            // debug(`char: ${char}`);
            if(escapeStatus === true) {
                char = `\${char}`;
                escapeStatus = false;
            }
            if(char === '\\') {
                escapeStatus = true;
                continue;
            }

            if(childCMDStatus === false && char === '[') {
                // debug('set child CMD status');
                childCMDStatus = true;
                continue;
            }

            if(childCMDStatus === true) {
                if(char === ']') {
                    // debug('delete child CMD Status && set child');
                    const arguName = `child_argus$${this._childArguNum}`;
                    this._child[arguName] = new CMD(childCMD, this.saved);
                    this._childArguNum ++;
                    realCMD += ` $${arguName}`;
                    childCMD = '';
                    childCMDStatus = false;
                    continue;
                }
                // debug('child CMD ++');
                childCMD += char;
                continue;
            }
            // debug('real cmd ++');
            realCMD += char;
            
            if(char === '#') {
                debug('遇到 注释');
                break;
            }
        }
        this._cmdString = realCMD;
    }

    split() {
        const cmdStr = this._cmdString;
        const cmds = cmdStr.split(' ').filter(cmd => !!cmd);
        const command = cmds.shift();
        debug(`get new command ${command}`);
        this.command = requireCommands.get(command); // 获取方法
        this.cmds = cmds;
    }

    run() {
        const self = this;
        const cmds = this.cmds;

        const values = [];
        for(const c of cmds) {
            if(c[0] === '$') {
                // 变量
                const name = c.slice(1);
                if(self._child[name]) {
                    values.push(self._child[name].run());
                } else {
                    values.push(self.saved.get(name));
                }
                continue;
            }
            values.push(c);
        }

        debug(`${this._cmd} set params: ${JSON.stringify(values)}`);
        values.unshift(this.saved);
        const result = this.command.apply(null, values);
        debug(`${this._cmd} return result : ${result}`);
        return result;
    }
}

module.exports = CMD;
