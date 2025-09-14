"use strict";
const showNumber = (callback, ms) => {
    let i = 1;
    setInterval(() => {
        callback(i);
        i++;
    }, ms);
};
const logNumber = (num) => {
    console.log("Phần tử thứ : ", num);
};
showNumber(logNumber, 1000);
