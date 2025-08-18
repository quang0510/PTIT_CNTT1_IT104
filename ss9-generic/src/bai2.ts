const wrapInArray = <T>(arg: T): T[] => {

    return Array(arg);
}

console.log(wrapInArray([5]));

console.log(wrapInArray("quang"));
console.log(wrapInArray({ a: 1, b: 2 }));