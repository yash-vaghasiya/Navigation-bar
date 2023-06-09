document.write("<h1>for-each method</h1>")

const names = ["yash","jay","chirag"];

const mrNames =[];

names.forEach((names,index)=>{
    mrNames.push("mr"+names);
});
document.write(mrNames + "<br>");
  


let array1 = [1,2,3,4,5,6];
let array2 = [];

array1.forEach((value)=>{
    document.write(value + "<br>");

    array2.push(value * 2);
});

document.write(array2 + "<br>");

document.write("<h1>multipal array object</h1>");
const data = [
    {
        "name" : "chiragbhai",
        "City" : {"Surname": "chovatiya",
        "city": "junagadh",
    }
    },
    {
        "name" : "yash",
        "Surname": "vaghasiya",
        "city": "rajkot",   
    }
];

document.write(data[0].City.city);


document.write("<h1>map method</h1>");
const namess = ["yash","jay","chirag"];
document.write(namess +"<br>");
const mrNamess = namess.map((namess)=>{
    return "mr" + namess;
});
document.write(mrNamess +"<br>");

let array3 = [1,2,3,4,5,6,7,8];
let array4 = [];

array4 = array3.map((value)=>{
    document.write(value +"<br>");
    return value * 2;
});
document.write(array4 +"<br>");


document.write("<h1>redius and rediusright method</h1>");
const a  = ["1","h","s","a","y"];
const right = a.reduceRight((prev ,cur)=>{
    return prev + cur;
});
document.write(right + "<br>");
const left = a.reduce((prev , cur)=>{
    return prev + cur;
});
document.write(left + "<br>");

const b  = [1,2,3,5,4,2,6];
const right1 = b.reduceRight((prev ,cur)=>{
    return prev + cur;
});
document.write(right1 + "<br>");
const left1 = b.reduce((prev , cur)=>{
    return prev + cur;
});
document.write(left1 + "<br>");


