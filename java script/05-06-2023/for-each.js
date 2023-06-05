const names = ["yash","jay","chirag"];

const mrNames =[];

names.forEach((names,index)=>{
    mrNames.push("mr"+names);
});
console.log(mrNames);
  

let array1 = [1,2,3,4,5,6];
let array2 = [];

array1.forEach((value)=>{
    console.log(value);

    array2.push(value * 2);
});

console.log(array2);