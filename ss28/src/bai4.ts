
const showNumber = (callback : (num : number) => void, ms : number ) => {

     let i = 1;

    setInterval(()=> {

      callback(i);

        i++;

    }, ms)
}

const logNumber = (num : number) => {

    console.log("Phần tử thứ : ", num);
    
}

showNumber(logNumber, 1000)