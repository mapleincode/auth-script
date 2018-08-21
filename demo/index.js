'use strcit';

const AutoSign = require('../index');
const fs = require('fs');
const path = require('path');
const cmd = fs.readFileSync(path.resolve('./cmd'), { encoding: 'utf-8' });
const define = require('./data.json');
const debug = require('debug')('demo-test');

const body = {
    header: {
        appkey: 'qwq'
    },
    body: {
        nihao: 'world'
    },
    query: {
        caller: 'xiaofeidai'
    }
};

const data = Object.assign(body, define);

let length = 1000;

debug('init object begin');
const autoSign = new AutoSign(cmd);
debug('init object end');

debug('begin done 5000 times');
while(length --) {
    autoSign.done(data);
}

debug('end done 5000 times');








