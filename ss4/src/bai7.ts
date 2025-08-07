const primeNumber = (value:number):boolean => {

    if(value <= 1){
         return false
    }

    for (let i = 2; i <= Math.sqrt(value); i++) {

        if(value % i === 0){
            return false
        } 
    }

    return true;
}

const processInput = (input: string | number | boolean) => { 

    if(typeof input === "boolean"){

        return input ? `Gia tri la true - tien hanh xu ly` : `Gia tri la false - dung xu ly`;
    }

    else if(typeof input === "string"){

        if(isFinite(+(input))){
            return Math.pow(Number(input),2);
        }
        let count = 0;
        
        for (let i = 0; i < input.length; i++) {
            if(isNaN(+(input.charAt(i)))) count++;
        }
        return count
    }
    else if (typeof input === "number") {
        return primeNumber(input) ? `La so nguyen to` : `Khong phai so nguyen to`
    }
}

console.log(processInput(`abc123`));