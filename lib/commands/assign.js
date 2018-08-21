'use strict';

module.exports = function() {
    const list = Array.from(arguments);
    list.shift();
    list.unshift({});

    return Object.assign.apply(null, list);
};
