const total = (...arr) => {
    const value = []

    for (let i = 0; i < arr.length; i++) {

        let tong = 0

        for (let j = 0; j < arr[i].length; j++) {
            tong += arr[i][j]
        }
        value.push(tong)
    }

    return value
}


const kq = total([1, 2], [6, 7, 8], [12, 8])
console.log(kq)
