'use strict';

const debug = require('debug')('CMD-CLASS');

const requireCommands = require('./require_commands');

class CMD {
    constructor(cmd, variable) {
        debug(`初始化 CMD: ${cmd}`);
        debug(`初始化变量集合: ${variable}`);

        this._cmd = cmd;
        this._child = {};
        this._childArguNum = 0; 
        this._cmdString = '';
        this.variable = variable;
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
                    this._child[arguName] = new CMD(childCMD, this.variable);
                    this._childArguNum ++;
                    realCMD += ` $${arguName}`;
                    childCMD = '';
                    childCMDStatus = false;
                    continue;
                }
                childCMD += char;
                continue;
            }
            realCMD += char;
            
            if(char === '#') {
                debug('遇到 注释');
                break;
            }
        }
        debug(`获得最后的 CMD 命令: ${realCMD}`);
        this._cmdString = realCMD;
    }

    split() {
        const cmdStr = this._cmdString;
        const cmds = cmdStr.split(' ').filter(cmd => !!cmd);
        const command = cmds.shift();
        debug(`获得的 CMD 方法名称 ${command}`);
        this.command = requireCommands.get(command); // 获取方法
        debug(`其 CMD ${command} 的类型是 ${typeof this.command}`);
        this.cmds = cmds;
    }

    /**
     * 设置变量集合(递归)
     * @param {object} variable 变量集合
     */
    setVariable(variable) {
        debug(`设置了新的变量集合 ${variable}`);
        this.variable = variable;
        for(const key of Object.keys(this._child)) {
            this._child[key].setVariable(variable);
        }
    }

    /**
     * 执行运行 CMD
     */
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
                    values.push(self.variable.get(name));
                }
                continue;
            }
            // 非变量 直接 PUSH
            values.push(c);
        }
        debug(`运行 "${this._cmd}" 并设置属性: ${JSON.stringify(values)}`);
        values.unshift(this.variable);
        const result = this.command.apply(null, values);
        debug(`运行 "${this._cmd}" 并返回结果 ${JSON.stringify(result)}`);
        return result;
    }
}

module.exports = CMD;
