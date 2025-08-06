"use strict";
let num1;
let num2;
let num3;
let num4;
let num5;
num1 = 2;
num2 = 1;
num3 = num1 + num2;
console.log(`${num1} + ${num2} = ${num3}`); // 1 + 2 = 3
num3 = num1 - num2;
console.log(`${num1} - ${num2} = ${num3}`); // 2 - 1 = 1
num3 = num1 * num2;
console.log(`${num1} * ${num2} = ${num3}`); // 2 * 1 = 2
num3 = num1 / num2;
console.log(`${num1} / ${num2} = ${num3}`); // 2 : 1 = 2 
num4 = "10";
num5 = true;
num3 = num4 + num5;
console.log(`num4 + num5 = ${num3}`); // `10` + `true` = `10true`
// //khi cộng chuỗi với boolean ts sẽ ép kiểu của num5 về string => num5 = `true`
// //vậy nên kết quả sẽ là 2 chuỗi nối vào nhau num3 = `10` + `true` = `10true`
