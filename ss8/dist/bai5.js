"use strict";
const array = (arr) => {
    if (arr.length > 0 && arr.length % 2 === 0) {
        return arr[0];
    }
    else {
        return undefined;
    }
};
console.log(array([1, 2, 3, 4]));
