"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get getWidth() {
        return this.width;
    }
    get getHeight() {
        return this.height;
    }
    set setWidth(newWidth) {
        if (newWidth > 0) {
            this.width = newWidth;
        }
        else {
            console.log(`k hop le`);
        }
    }
    set setHeight(newHeight) {
        if (newHeight > 0) {
            this.height = newHeight;
        }
        else {
            console.log(`K hop le`);
        }
    }
    perimeter() {
        return (2 * (this.width + this.height));
    }
    area() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(5, 7);
console.log(`Chieu dai : ${rectangle.getWidth}`);
console.log(`Chieu rong : ${rectangle.getHeight}`);
console.log(`Chu vi : ${rectangle.perimeter()}`);
console.log(`Dien tich : ${rectangle.area()}`);
console.log(`Sau khi cap nhat : `);
console.log(`Chieu dai : ${rectangle.setWidth = 6}`);
console.log(`Chieu rong : ${rectangle.setHeight = 8}`);
console.log(`Chu vi : ${rectangle.perimeter()}`);
console.log(`Dien tich : ${rectangle.area()}`);
