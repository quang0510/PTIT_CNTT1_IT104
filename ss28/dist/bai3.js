"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7];
const processArray = (callback, array) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
};
const callbackFunction = (item) => {
    setTimeout(() => {
        console.log(`Phần tử thứ : ${item}`);
    }, 1000);
};
processArray(callbackFunction, numbers);
