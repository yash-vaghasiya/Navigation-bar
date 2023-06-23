document.write("<h1>Function</h1>")
// function

function sum(number1,number2,number3){
    return number1 + number2 + number3;
};
const newStore = sum(10,5,20)
document.write(newStore + "<br>");

function even(number){
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
document.write(even(14) + "<br>");

document.write("<h1>function expression</h1>")
// function Expression 

const sum1 = function(number1,number2,number3){
    return number1 + number2 + number3;
};
const ans1 = sum1(5,8,2);
document.write(ans1 + "<br>");

const findFunc = function(array, target){
    for (let i = 0; i < array.length; i++){
        if (array[i] === target){
            return i;
        }
    }
};

const array = [1,5,4,3,2,6,8,7];
const ans = findFunc(array,7);
document.write(ans + "<br>");

document.write("<h1>Arrow Function</h1>")
// arrow function

const sum3 = (number1, number2, number3) =>{
    return number1 + number2 + number3;
};
const newStore1 = sum3(10,20,30);
document.write(newStore1 + "<br>");

const odd = (number) =>{
    if (number % 2 === 1){
        return true;
    }
    return false;
};
document.write(odd(15) + "<br>");

document.write("<h1>Function in Function</h1>")
// function in function

function myFuc(){
    const y1 = () => {
        document.write("hello Javascript" + "<br>");
    }

    const y2 = (numb1 , numb2) => {
        return numb1 + numb2;
    }

    const y3 = (numb1, numb2) => numb1 * numb2;

    y1();

    const ans = y2(10 , 20);
    document.write(ans + "<br>");

    const ans1 = y3(15 , 5);
    document.write(ans1 + "<br>");
}
myFuc()

