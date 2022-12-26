function sum(a, b) {
    return a+b;
}

function capitalize(string) {
    const capital = string[0].toUpperCase();
    return capital + string.slice(1);
}

function reverseString(string) {
    // return string.split("").reverse().join("");
    if (string === "") return "";
    else return reverseString(string.substr(1)) + string.charAt(0);
}

class Calculator {
    constructor(){}

    add(a, b){
        return a + b;
    }

    substract(a, b){
        return a - b;
    }

    divide(a, b){
        return a / b;
    }

    multiply(a, b){
        return a * b;
    }
}

const calc = {
    add: (a, b) => {return a + b},
    substr: (a, b) => {return a - b},
    divide: (a, b) => {return a / b},
    multiply: (a, b) => {return a * b}
}

function caeserCipher(string, num){
    let result = "";

    for(let i = 0; i < string.length;i++){
       let x = string.charCodeAt(i);
       result += String.fromCharCode(shift(x, num));
    }
    return result
}

function shift(letter, num){
    if (letter > 64 && letter < 91){
        if (letter + num > 90) return letter + num - 26;
        return letter + num;
    } else if (letter > 96 && letter < 123){
        if (letter + num > 122) return letter + num - 26;
        return letter + num;
    }else return letter;
}

class arrayTools {
    constructor(array){
        this.array = array;
    }

    sum(){
        const sum =  this.array.reduce((result, num)=>{
            return result + num;
        }, 0)
        return sum;
    }

    smallest(){
        const smallest = this.array.reduce((total, num) => {
            return (total < num) ? total : num;
        });
        return smallest;
    }

    biggest(){
        const biggest = this.array.reduce((total, num) => {
            return (total > num) ? total : num;
        });
        return biggest;
    }

    average(){
        const average = this.sum() / this.array.length;
        return Math.floor(average);
    }

}

function analayzeArray(array){
    const arryTool = new arrayTools(array);
    const object = {
        average: arryTool.average(),
        min: arryTool.smallest(),
        max: arryTool.biggest(),
        length: array.length,
    }

    return object;
}


module.exports.sum = sum;
module.exports.capitalize = capitalize;
module.exports.reverseString = reverseString;
module.exports.calc = calc;
module.exports.caeserCipher = caeserCipher;
module.exports.analayzeArray = analayzeArray;

