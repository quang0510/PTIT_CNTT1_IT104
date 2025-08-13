"use strict";
const partialUpdate = (obj, updates) => {
    return Object.assign(Object.assign({}, obj), updates);
};
const object8 = { name: 'Nguyễn Văn A', age: 25, job: 'Dev' };
const updates8 = { age: 31 };
console.log("Object 1: ", partialUpdate(object8, updates8));
