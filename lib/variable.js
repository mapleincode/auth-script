'use strict';

class Variable {
    constructor(defineData) {
        this.__data = {

        };
        this.__defineData = defineData;
        this.init();
    }

    set(name, value) {
        this.__data[name] = value;
        return value;
    }

    get(name) {
        return this.__data[name];
    }

    clean(name) {
        this.__data[name] = undefined;
    }

    init() {
        this.__data = {};
        const defineData = this.__defineData;
        for(const key in defineData) {
            if(!defineData.hasOwnProperty(key)) continue
            this.set(key, defineData[key]);
        }
    }
}

module.exports = Variable;
