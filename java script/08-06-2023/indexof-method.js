document.write("<h1>indexOf method</h1>")
// indexof method

const bird = ["perrot", "peacock", "dove", "spreow"];
const abc = bird.indexOf("perrot");
document.write(abc + "<br>");


const num = [1, 2, 3, 5, 4, 6, 8, 9, 0];
const num1 = num.indexOf(5);
document.write(num1 + "<br>");

document.write("<h1>Some method</h1>")

// some method
// aa or oparetor tarike kam kare 6

let abc1 = [88, 44, 22, 66, 99];

let abc2 = abc1.some((abc1) => {
    return abc1 < 10;
});
document.write(abc2 + "<br>");

let abc3 = [88, 44, 22, 66, 99];

let abc4 = abc3.some((abc3) => {
    return abc3 > 10;
});
document.write(abc4 + "<br>");

document.write("<h1>isArray method</h1>")

// isArray method

let value = ["yash", "chirag", "rushabh", "jay"];
let value1 = Array.isArray(value);
document.write(value1 + "<br>");

let value2 = "this is a javascript";
let value3 = Array.isArray(value2);
document.write(value3 + "<br>");

document.write("<h1>sort method</h1>")

// sort method

let number = [2, 1, 3, 5, 4, 6, 9, 7, 8];
document.write(number + "<br>")
number.sort();
document.write(number + "<br>");

let numbers = [0, 1, 2, 3, 10, 20, 30];
numbers.sort((a, b) => {
    return a - b;
});

document.write(numbers + "<br>");

let numbers1 = [0, 1, 2, 3, 10, 20, 30];
numbers1.sort((a, b) => {
    return b - a;
});

document.write(numbers1 + "<br>");

let animals = ["cat", "dog", "elephant", "bee", "ant"];
animals.sort();

document.write(animals + "<br>");


document.write("<h1>every method</h1>")

// every method 

// badhi condition check kare ek khoti  hase toy false print karase
// badhi sachi hase toj true prink karase mins ke aa and tarike use kare 6 

let marks = [50, 40, 60, 35];
let marks1 = marks.every((value) => {
    return value > 30;
});
document.write(marks1 + "<br>");

let marks2 = [50, 20, 60, 35];
let marks3 = marks2.every((value) => {
    return value > 30;
});
document.write(marks3 + "<br>");