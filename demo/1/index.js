'use strcit';

const AutoSign = require('../..');
const fs = require('fs');
const path = require('path');
const cmd = fs.readFileSync(path.resolve(__dirname, './cmd'), { encoding: 'utf-8' });
const define = require('./data.json');
const debug = require('debug')('demo-test');

let length = 1000;

const body = {
    headers: {
        appkey: 'qwq'
    },
    body: {
        nihao: 'world',
    },
    query: {
        caller: 'xiaofeidai'
    }
};

const data = Object.assign(body, define);

debug('init object begin');
const autoSign = new AutoSign(cmd);
debug('init object end');

// debug('begin done 5000 times');
// while(length --) {
//     data.body.waw = length;
//     const result = autoSign.done(data);
//     debug(result);
// }

// debug('end done 5000 times');


debug(autoSign.done(data));









