"use strict";
const delayCallback = (callback, ms) => {
    setTimeout(() => {
        callback();
    }, ms);
};
const delayFunction = () => {
    console.log(" Hàm được thực hiện sau 1s delay");
};
delayCallback(delayFunction, 1000);
