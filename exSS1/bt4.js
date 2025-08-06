const check = (value) => {
    if (typeof value !== `number`) {
        console.log(`${value} khong phai la so`);
        return;
    }

    if (value % 2 === 0) {
        console.log(`${value} la so chan`);
    } else {
        console.log(`${value} la so le`);
    }
};

check(10); 
check(`a`);
check(7); 
