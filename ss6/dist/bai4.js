"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius;
    }
    calculatedPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Retangle4 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatedPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
const retangle4 = new Retangle4(5, 7);
console.log(`chu vi Circle : ${circle.calculatedPerimeter().toFixed(2)}`);
console.log(`dien tich Circle : ${circle.calculateArea().toFixed(2)}`);
console.log(`chu vi Retangle4 : ${retangle4.calculatedPerimeter().toFixed(2)}`);
console.log(`dien tich Retangle4 : ${retangle4.calculateArea().toFixed(2)}`);
