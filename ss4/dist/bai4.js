"use strict";
const unionType = (numbers) => {
    if (typeof numbers === `number`) {
        return numbers % 2 === 0 ? `Day la so chan` : `Day la so le`;
    }
    else {
        return `${numbers.length} ky tu`;
    }
};
console.log(unionType(10));
