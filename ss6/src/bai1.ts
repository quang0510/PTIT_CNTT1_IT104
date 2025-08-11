abstract class Shape{

    name: string

    constructor(name: string){
        this.name = name
    }
    getName = () => {
        return this.name;
    }
    abstract getSize():void;
}

class Rectangle extends Shape{

    width: number;
    height: number;

    constructor(name: string,width: number,height: number){

        super(name);
        this.width = width
        this.height = height
    }
    getSize = ():void => {

        console.log(`Chieu dai : ${this.width}`);
        console.log(`Chieu rong : ${this.height}`);
    }
}

const retangle = new Rectangle(`Hinh chu nhat`,10,5)
console.log(retangle.getName());

retangle.getSize()