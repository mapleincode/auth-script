'use strict';

const debug = require('debug')('require-commands');
const fs = require('fs');
const path = require('path');

const AllDefinedCMD = {};

const cmdNames = fs.readdirSync(path.resolve(__dirname, './commands'));

debug('cmd name paths', cmdNames);

for(const cmd of cmdNames) {
    const name = path.parse(cmd).name;
    AllDefinedCMD[name] = require(path.resolve(__dirname, './commands', cmd));
}

debug('load cmds', cmdNames);

exports.get = function(name) {
    return AllDefinedCMD[name] || null;
};
