// Object Destructuring
document.write("<h1>Object Destructuring</h1>")

const car = {
    hundai : "verana",
    Maruti : "suzuki",
    Year : 1980,
    model : 2015,
};

let {hundai,Maruti,...otherEle} = car;
document.write(Maruti + "<br>");
document.write(otherEle + "<br>");

document.write("<h1>Object inside Array</h1>")
// Object inside Array

const user =[
    {userId: 1, firstName: "yash", gender: "male"},
    {userId: 2, firstName: "rushabh", gender: "male"},
    {userId: 3, firstName: "chirag", gender: "male"},
];

for (let users of user){
    document.write(users.firstName + "<br>");
}

document.write("<h1>Nested destructuring</h1>")
// Nested destructuring

const userr =[
    {userId: 1, firstName: "yash", gender: "male"},
    {userId: 2, firstName: "rushabh", gender: "male"},
    {userId: 3, firstName: "chirag", gender: "male"},
];

const[{firstName:userr2firstName,userId}, ,{gender:userr3gender}] =  userr;
document.write(userr2firstName + "<br>");
document.write(userId + "<br>");
document.write(userr3gender + "<br>");

document.write("<h1>dot and brecket notaion</h1>")
// dot and brecket notaion

const key = "email";
const person = {
    name: "yash",
    age: 22,
    "persone hobbies": ["guitar", "cricket", "lisaning music"]
};

document.write(person["person hobbies"] + "<br>");
person[key] = "yashvaghasiya@gmail.com";
document.write(person + "<br>");