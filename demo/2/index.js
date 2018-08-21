'use strict';

const data = {
    body: {
        api: 'xxxxx',

    },
    query: {
        z1: 'zssss1'
    },
    headers: {
        c1: 'cwee1'
    },
    params: {
        d1: 'd1sss'
    },
    appKey: 'dwdwdwdwd',
    appSecret: 'ad33d1190ff8383b5650097c0b6403868a82bd4c',
    privateKey: '-----BEGIN RSA PRIVATE KEY-----\nMIICXgIBAAKBgQDXiqZ23ZydEvYPWqXnhJHAD6R7cwF8yubeGxthgeB/SG+YzCWlTch2psyUMNCm6Mt/amp9WRK8W03DCd3dzXTzfNtlSSPS/9ft/Sab8PJ0WA87TPaLT5CHKEYCmtE1sVwWySaekRIaJZzD/ixlranVS1ylC7pG2f4LpxXw3Ku3BQIDAQABAoGBAIY5haiIITt/z1OIc8BVQh6Enz1xRP/dqx+tacOzCYa6KSTSHK9wXOHmxYeTTpxiZDeYoXAlxBEgGrDWuB+kDqtdE0pnq7V7P1k7Zu0F6oaTotwKbnhjAhyPHB1bFCSVBWlNtE5WWN6tCAPgPmVyIugVj+0SG4AjdeHho3F16uwRAkEA/rRLBgQ65vSYW0PkyVHht3KhQ0RSQa1RWkSJKuZvPgGK+qNIQRx0B8JuWGGX6SW8oqoQ6k5zkt57jsxQvxO26wJBANijWtO1Jv69BJ9Zt8Buo6Z/v93Sa+3H6gxgfWGn/GnOhpF7gjRQi8JuQ24gelARawdW5+usZQLJ64c67Y/arc8CQQDygTqFKfXi+7MsAgKM45cjENMVtrESszAn3+UxoWD9Cn8Gj/w1ch/PW4GwSItYgoON5JpiW/uSNJ4zobinlN+tAkBBQxzWkEkaDpk45A8+ElaMjwme6ogHDuWMKvk6lR+uREA3zYxQ9D7WKN95aqFOQ6EJif29+qZHa8rfZzovzwHzAkEArjL2E+739D0E13/EQKNf3fdg1NNOxuEAxDQ5CXAjPTohtIPgxjo3Ua6N77uPowwg55Q+OvIgIKwk0uWTgny0/w==\n-----END RSA PRIVATE KEY-----'
};

const AutoSign = require('../..');
const fs = require('fs');
const path = require('path');
const cmd = fs.readFileSync(path.resolve(__dirname, './cmd'), { encoding: 'utf-8' });
const debug = require('debug')('demo-test');

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