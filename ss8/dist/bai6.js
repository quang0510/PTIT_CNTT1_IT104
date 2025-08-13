"use strict";
const findElement = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return arr[i];
        }
    }
    return undefined;
};
const arr = [1, 2, 3, 4, 5];
const result = findElement(arr, 3);
console.log(result);
