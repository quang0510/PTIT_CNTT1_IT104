interface Person{

    name : string;
    age : number;
    job : string;
}

const partialUpdate = <T>(obj : T, updates : Partial<T>) : T => {

    return {...obj, ...updates};
}

const object8 : Person = { name: 'Nguyễn Văn A', age: 25, job: 'Dev'};
const updates8  = { age: 31 };
console.log("Object 1: ",partialUpdate(object8, updates8));
