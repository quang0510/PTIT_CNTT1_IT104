"use strict";
class User {
    constructor(id, name, email, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
const updateUser = (user, update) => {
    if (update.id !== undefined && (update === null || update === void 0 ? void 0 : update.id) != user.id) {
        return "id k the thay doi";
    }
    return Object.assign(Object.assign({}, user), update);
};
const user = new User(1, "quang", "quang@gmail.com");
const update1 = { name: "Dang quang" };
const update2 = { id: 2, name: "Dang" };
console.log(updateUser(user, update2));
