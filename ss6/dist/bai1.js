"use strict";
class Shape {
    constructor(name) {
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.getSize = () => {
            console.log(`Chieu dai : ${this.width}`);
            console.log(`Chieu rong : ${this.height}`);
        };
        this.width = width;
        this.height = height;
    }
}
const retangle = new Rectangle(`Hinh chu nhat`, 10, 5);
console.log(retangle.getName());
retangle.getSize();
