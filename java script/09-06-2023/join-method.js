document.write("<h1>join method</h1>")
// join method

let join = ["yash", "jay", "deep", "chirag", "rushabh"];
let join1 = join.join(" : ");
document.write(join1 + "<br>");

const random = [44, "name", undefined, null];
const random1 = random.join(" and ");
document.write(random1 + "<br>");

document.write("<h1>splice method</h1>")
// splice method

const mycar = ["odi", "bugardi", "ambesiter", "marsidiz", "jeguar"];
const removedcar = mycar.splice(2, 1, "hundai");
document.write(mycar + "<br>");
document.write(removedcar + "<br>");

const mycar1 = ["odi", "bugardi", "ambesiter", "marsidiz", "jeguar"];
const removedcar1 = mycar1.splice(2, 0, "hundai");
document.write(mycar1 + "<br>");
document.write(removedcar1 + "<br>");

document.write("<h1>cocate method</h1>")
// concate method

let names = ["yash", "chirag"];
let names1 = ["rushabh", "jay"];

let con = names.concat(names1);
document.write(con + "<br>");

let num = [1, 2, 3, 4];
let num1 = [5, 6, 7, 8, 9];

let numb = num.concat(num1);
document.write(numb + "<br>");

document.write("<h1>key method</h1>")
// key method

let named = {
    name: "yash",
    age: 21,
    surname: "vaghasiya",
}
let name1 = Object.keys(named);
document.write(name1 + "<br>");

let number = [1, 2, 3, 5, 8];
let number1 = Object.keys(number);
document.write(number1 + "<br>");