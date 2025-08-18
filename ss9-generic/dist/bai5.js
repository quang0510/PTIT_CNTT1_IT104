"use strict";
class DataStore {
    constructor(data) {
        this.data = data;
    }
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
    remove(index) {
        this.data.splice(index, 1);
    }
}
const newData = new DataStore([]);
newData.add(1);
newData.add(2);
newData.add(999);
console.log(newData.getAll());
newData.remove(1);
console.log("Sau khi xoa: ", newData.getAll());
