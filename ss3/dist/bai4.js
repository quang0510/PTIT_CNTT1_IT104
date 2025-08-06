"use strict";
const a = "2";
const b = 2;
// So sánh  (==)
console.log(a == b); // true
// == sẽ tự động ép kiểu để so sánh
// Ở đây "2" được ép sang số 2 nên kết quả là true
// So sánh (===)
console.log(a === b); // false
// === không ép kiểu, so sánh cả giá trị và kiểu dữ liệu.
// Ở đây "2" là string và 2 là number, khác kiểu dữ liệu nên kết quả là false.
