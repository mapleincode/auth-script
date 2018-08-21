'use strict';

module.exports = function() {
    const list = Array.from(arguments);
    list.shift();

    return list.join('');
}