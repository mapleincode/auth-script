'use strict';

const requireCommands = require('./require_commands');

class CMD {
    constructor(cmd, saved) {
        this._cmd = cmd;
        this._child = {};
        this._childArguNum = 0; 
        this._cmdString = '';
        this.saved = saved;
        this.cmds  = [];

        this.init();
        this.split(); 
    }

    init(cmd) {
        let escapeStatus = false;
        let childCMDStatus = false;
        let realCMD = '';
        let childCMD = '';
        for(const char of cmd) {
            if(escapeStatus === true) {
                char = `\${char}`;
                escapeStatus = false;
            }
            if(char === '\\') {
                escapeStatus = true;
                continue;
            }

            if(childCMDStatus === false && char === '[') {
                childCMDStatus = true;
                continue;
            }

            if(childCMDStatus === true) {
                if(char === ']') {
                    const arguName = `child_argus$${this._childArguNum}`;
                    this._child[arguName] = new CMD(childCMD);
                    this._childArguNum ++;
                    realCMD += arguName;
                    realCMD = '';
                    childCMDStatus = false;
                }

                childCMD += char;
            }

            realCMD += char;
            
            if(char === '#') {
                break;
            }
        }
        this._cmdString = realCMD;
    }

    split() {
        const cmdStr = this._cmdString;
        const cmds = cmdStr.split(' ');
        const command = cmds.shift();
        this.command = requireCommands.get(command); // 获取方法
        this.cmds = cmds;
    }

    run() {
        const cmds = this.cmds;

        const values = [];
        for(const c of cmds) {
            if(cmds[0] === $) {
                // 变量
            }

            values.push(c);
        }

        return this.command.apply(null, values);
    }
}

module.exports = CMD;
