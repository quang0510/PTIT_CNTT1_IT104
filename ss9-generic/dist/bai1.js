"use strict";
const identity = (arg) => {
    return arg;
};
console.log(identity(5));
console.log(identity("quang"));
console.log(identity({ a: 1 }));
