'use strict'

let immutableObject = {
    prev: null,

    put(key, value) {
        let cloneObj = {}

        cloneObj[key] = value;
        Object.assign(cloneObj, this);
        cloneObj.prev = this;
        return cloneObj;
    }
}