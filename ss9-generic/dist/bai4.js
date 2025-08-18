"use strict";
const withDefault = (arg) => {
    if (arg) {
        return arg;
    }
    return "default";
};
console.log(withDefault());
console.log(withDefault(999));
console.log(withDefault(true));
