const check7 = (text: string): string => {
    const result: string[] = [];

    for (let i = 0; i < text.length; i++) { 

        const char: string = text[i];
        
        if (!result.includes(char)) {
            result.push(char);
        }
    }

    return result.join("");
};

console.log(check7(`hello world`));
