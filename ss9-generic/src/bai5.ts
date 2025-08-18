class DataStore<T> {

    private data: T[];

    constructor(data: T[]) {
        this.data = data;
    }

    add(item: T): void {
        this.data.push(item);
    }

    getAll(): T[] {
        return this.data;
    }

    remove(index: number): void {
        this.data.splice(index, 1);
    }
}


const newData = new DataStore<number>([]);
newData.add(1);
newData.add(2);
newData.add(999);

console.log(newData.getAll());

newData.remove(1);
console.log("Sau khi xoa: ", newData.getAll());
