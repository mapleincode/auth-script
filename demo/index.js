'use strcit';

const auto = require('../index');

const done = auto.done;

const fs = require('fs');
const path = require('path');

const cmd = fs.readFileSync(path.resolve('./cmd'), { encoding: 'utf-8' });
const define = require('./data.json');
// console.log(cmd, define);

