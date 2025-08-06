let string10 : string = "hello world apple banana orange pumpkin cucumber"

let string = string10.split(" ");

let maxString = "";

const checkRepeat = (str : string) : boolean => {
    let checkStr = "";

    for (let i = 0; i < str.length; i++) {
        if(checkStr.includes(str[i])){
            return true;
        }
        checkStr+=str[i];
    }
    return false;
}

string.forEach(str => {
    
    if(str.length > maxString.length && !checkRepeat(str)){
        maxString = str;
    }
});

console.log("Max string: ", maxString);