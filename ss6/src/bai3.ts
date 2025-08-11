// method thông thường 
// - có phần thân                      
// - Sử dụng để thực hiện tác vụ cụ thể trong 1 lớp
// - Có thể gọi trực tiếp từ đối tượng của lớp


 // abstraact method
 // - Không có phần thân, chỉ được khởi tạo thôgn qua abstract class
 // - Được sử định nghĩa 1 method chung mà lớp con phải thực hiện
 //  - Không thể gọi trực tiếp, chỉ có thể gọi thông qua lớp con đã triển khai

// Ví dụ : 

// - Abstract Method

abstract class Animal1{
    abstract sound(): void;
}

class Dog extends Animal1{
    sound(): void {
        console.log(`Gau gau`);
    }
}

const dog = new Dog();

console.log(`- Abstract Method : `);
dog.sound()

// - Method 
class Animal2{
    sound = ():void => {
        console.log(`Meo meo`);
    }
}

class Cat extends Animal2{
}

const cat = new Cat();
console.log(`- Method : `);
cat.sound()