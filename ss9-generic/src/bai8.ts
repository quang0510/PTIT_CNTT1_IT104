const createObject = <K extends string, V>(keys: K[], values: V[]): Record<K, V> => {

    const result = {} as Record<K, V>;

    for (let i = 0, j = 0; i < keys.length, j < values.length; i++, j++) {

        result[keys[i]] = values[j];
    }
    return result;
}

const keys = ['name', 'age', 'email'];

const values = ['quang', 20, 'quang@example.com'];

console.log(createObject(keys, values))