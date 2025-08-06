const isValidNumber = (value: any): boolean => {
    return typeof value === "number" && isFinite(value);
};

const cong = (num1:number | string,num2:number | string):number | undefined => {
    let numA = typeof num1 === `string` ? +(num1) : num1;
    let numB = typeof num2 === `string` ? +(num2) : num2;
    if(!isValidNumber(numA)) return;
    if(!isValidNumber(numB)) return
    return numA + numB;
}

const tru = (num1:number | string,num2:number | string):number | undefined => {
    let numA = typeof num1 === `string` ? +(num1) : num1;
    let numB = typeof num2 === `string` ? +(num2) : num2;
    if(!isValidNumber(numA)) return;
    if(!isValidNumber(numB)) return
    return numA - numB;
}

const nhan = (num1:number | string,num2:number | string):number | undefined => {
    let numA = typeof num1 === `string` ? +(num1) : num1;
    let numB = typeof num2 === `string` ? +(num2) : num2;
    if(!isValidNumber(numA)) return;
    if(!isValidNumber(numB)) return
    return numA * numB;
}

const chia = (num1:number | string,num2:number | string):number | undefined => {
    let numA = typeof num1 === `string` ? +(num1) : num1;
    let numB = typeof num2 === `string` ? +(num2) : num2;
    if(!isValidNumber(numA)) return;
    if(!isValidNumber(numB)) return
    return numA / numB;
}


console.log(cong(`10`,5) ? cong(`10`,5) : "Khong hop le");

console.log(tru(10,5));

console.log(nhan(10,5));

console.log(chia(10,5));