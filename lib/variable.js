'use strict';

const data = {};

exports.set = function(name, value) {
    data[name] = value;
};

exports.get = function(name, value) {
    return data[name];
};
