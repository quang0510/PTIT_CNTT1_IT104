const object4 = <T, U>(obj1: T, obj2: U): T & U => ({ ...obj1, ...obj2 });

const obj1 = { name: "quang", age: 20 };
const obj2 = { address: "123abc", city: "Ha noi" };

const combine = object4(obj1, obj2);

console.log(combine);
