'use strict';

const fs = require('fs');
const path = require('path');

const AllDefinedCMD = {};

const cmdNames = fs.readdirSync('./commands');

for(const cmd of cmdNames) {
    const name = path.parse(cmd).name;
    AllDefinedCMD[name] = require(path.resolve('./commands', cmd));
}

console.log(AllDefinedCMD);

exports.get = function(name) {
    return AllDefinedCMD[name] || null;
};
