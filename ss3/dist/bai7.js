"use strict";
const check7 = (text) => {
    const result = [];
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (!result.includes(char)) {
            result.push(char);
        }
    }
    return result.join("");
};
console.log(check7(`hello world`));
