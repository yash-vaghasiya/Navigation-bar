const numbers = [1, 2, 3, 5, 2, 1, 5, 6, 8, 9, 4, 8, 0];

const num = Array.from(new Set(numbers));

document.write(num + "<br>");

let str = "123654789";

let str1 = Array.from(str, mapfn);

function mapfn(y) {
    return Number(y);
}
document.write(str1 + "<br>");

let result = [2, 4, 6];

let result1 = Array.from(result, abc);

function abc(x) {
    return x + 2;
}
document.write(result1 + "<br>");

let tex = "ABCDEFGHIJKL";

let type = Array.from(tex);

document.write(type);

document.write("<h1>filter-method</h1>")

let data = [45, 23, 21, 0, 4, 2, 3];
let y1 = data.filter((value) => {
    return value < 10;
});
document.write(y1 + "<br>");

let numbers1 = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];

let array = numbers1.filter((value) => {
    return value >= 0;
});

document.write(array + "<br>");

let values = [{ name: "yash", skill: "JavaScript" },
{ name: "jay", skill: "Python" },
{ name: "rushabh", skill: "React" }
];

let value2 = values.filter((names) => {
    return names.skill == "Python";
});

document.write(value2);

document.write("<h1>reverse method</h1>")

const fruits = ["banana", "mango", "Orange", "apple", "grapes"];

fruits.reverse();
document.write(fruits);

const num1 = [1, 2, 3, 4, 5, 6, 7, 8];

num1.reverse();
document.write(num1);