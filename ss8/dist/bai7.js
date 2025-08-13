"use strict";
const flatten = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr = newArr.concat([...arr[i]]);
    }
    return newArr;
};
console.log(flatten([[1, 2], [3, 4], [5, 6]]));
