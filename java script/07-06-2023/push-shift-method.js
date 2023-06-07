document.write("<h1>push method</h1>")
let fruits = ["apple", "mango", "grapes"];
document.write(fruits + "<br>");
// push
fruits.push("banana");
document.write(fruits + "<br>");

let num = [1, 2, 3, 5, 4,];
document.write(num + "<br>");

num.push(6);
document.write(num + "<br>");


document.write("<h1> shift method </h1>")


//shift
let fruits1 = ["apple", "mango", "grapes"];
document.write(fruits1 + "<br>");
let removedFruit = fruits1.shift();
document.write(fruits1 + "<br>");
document.write("removed fruits is ", removedFruit + "<br>");

let num1 = [1, 2, 3, 4, 5, 6, 8, 7, 9];
document.write(num1 + "<br>");

let removednumber = num1.shift();
document.write(num1 + "<br>");
document.write("removed number is", removednumber + "<br>");

document.write("<h1> include method </h1>")

//include method

let arr = ["yash", "chirag", "jay", "rushabh"];
let result = arr.includes("chirag", 1);
document.write(result + "<br>");

let arr2 = [1, 2, 5, 4, 8, 7];
let result1 = arr2.includes(2, 1);
document.write(result1 + "<br>");

document.write("<h1> pop method </h1>")

//pop method

const nam = ["bike", "honda", "forvil", "vrgrnar", "marsidiz"];
document.write(nam + "<br>");
const nam1 = nam.pop();
document.write(nam + "<br>");
document.write("removed item is", nam1 + "<br>");

const nam2 = [1, 10, 20, 12, 30, 56, 74, 56];
document.write(nam2 + "<br>");
const nam3 = nam2.pop();
document.write(nam2 + "<br>");
document.write("removed item is", nam3 + "<br>");


document.write("<h1> slice method </h1>")


// slice method


  let number = [23, 56, 87, 32, 75, 13];
  
  let number1 = number.slice(1, 5);
  document.write(number + "<br>");
  document.write(number1 + "<br>");

  let number2 = ["cow", "sperrow", "lion", "tiger", "buffelow", "pizon", "parrot", "dove"];
  
  let number3 = number2.slice(2, 7);
  document.write(number2 + "<br>");
  document.write(number3 + "<br>");