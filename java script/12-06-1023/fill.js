document.write("<h1>fill method</h1>")
// fill(value, start, end);

const frute = ["banana", "grapes", "apple", "orange"];
const ans = frute.fill("mango", 0, 2);
document.write(ans + "<br>");

let number = [1,2,3,5,6,7,8];
let number1 = number.fill(22,0,3);
document.write(number1 + "<br>");


document.write("<h1>find method</h1>")
// find method

let nums = [1,2,8,5,7,9,10,12,15];
let nums1 = nums.find((nums)=>{
    return nums > 10;
});
document.write(nums1 + "<br>");


document.write("<h1>findindex method</h1>")
// find index 

const ages = [3,5,4,20,30,33];
const ages1 = ages.findIndex((valu)=> valu >20);
document.write(ages1 + "<br>");

const nam = ["gopal", "mohan", "ram", "lakhan"];
const nam1 = nam.findIndex((nams)=> nams == "mohan")
document.write(nam1 + "<br>");


document.write("<h1>lastindexof method</h1>")

// lastindexof

let fname = ["yash", "jay", "deep", "jevin", "rushabh"]
let lname = fname.lastIndexOf("deep");
document.write(lname +"<br>");

let ank = [1,2,5,4,3,5,4,6,7];
let ank1 = ank.lastIndexOf(5);
document.write(ank1 +"<br>");


document.write("<h1>length method</h1>")

// length

let val = "i am using javascript in file";

document.write(val.length + "<br>");


document.write("<h1>split method</h1>")
// split method

let text = "welcome to my website javascript";
let text1 = text.split("t");
document.write(text1[1] + "<br>");


document.write("<h1>toString method</h1>")

// tostring method

let num = 25;
let num1 = num.toString();
document.write(typeof num1 + "<br>");

const names = ["yash", "jay"];
document.write(names + "<br>");
const names1 = names.toString();
document.write(typeof names1 + "<br>");


document.write("<h1>unshift method</h1>")

// unshift method

let vihical = ["bullet", "bike","car", "honda", "ktm"];
vihical.unshift("r15");
document.write(vihical + "<br>");


document.write("<h1>valueOf method</h1>")

// valueof method

let xyz = "hello javascript";
document.write(xyz.valueOf() + "<br>");

// tostring method

document.write("<h1>to string method</h1>")

const namesd = ["yash","jay","rushabh","chirag"];
 const nam8 = namesd.toString();
 document.write(typeof nam8 + "<br>");

let bas = 10;
 let bas1 = bas.toString();
 document.write(typeof bas1 + "<br>")