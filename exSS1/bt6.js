
function createUser(name, age = 18, role = `user`) {
    return {
        name: name,
        age: age,
        role: role
    };
}

const user1 = createUser(`Dev`);
console.log(user1); 

const user2 = createUser(`Nguyen Van A`, 25, `Admin`);
console.log(user2);

const user3 = createUser(`Bui Thi B`, 30);
console.log(user3);

