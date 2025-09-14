const calculate = (a: number, b: number, callBack: (total: number) => void) => {

    const result = a + b;

    callBack(result)
}
const handleLogTotal = (result:number) : void => {

    console.log("Tổng: ", result);
}
calculate(5,10,handleLogTotal)