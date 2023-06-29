document.write("<h1>Dates</h1>");

const d = new Date();
document.write(d + "<br>");


const d1 = new Date("October 13, 2023 11:13:00");
document.write(d1 + "<br>");

const d2 = new Date(2022, 11, 24, 10, 33, 30, 0);
document.write(d2 + "<br>");

// 1 day 24 hours is 86,400,000 milliseconds.

const d4 = new Date(86400000);
document.write(d4 + "<br>");

document.write("<h1>toDateString</h1>");
// toDateString 

let d5 = new Date();
document.write(d5.toDateString() + "<br>");

let d7 = new Date();
document.write(d7.toISOString() + "<br>");


document.write("<h1>Object</h1>")
// object 

let preson = {
    firstName : "yash",
    lastName  : "patel",
    age : 21,
};
document.write(preson.firstName + " " + preson.lastName + "<br>");


let preson1 = {
    firstName : "yash",
    lastName  : "patel",
    age : 21,
};

const y = preson1;
y.age = 20;
document.write(preson1.firstName + " is " + preson1.age + " year old." + "<br>");


const myObj = {
    name: "yash",
    age: 20,
    cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Oddi"
    }
  }
document.write(myObj.cars.car3 + "<br>");

document.write("<h1>this keyword</h1>")
// this keyword

let preson2 = {
    firstName : "yash",
    lastName  : "patel",
    age : 21,
    fullname :function(){
        return this.firstName + " " + this.lastName
    }
};
document.write(preson2.fullname());
