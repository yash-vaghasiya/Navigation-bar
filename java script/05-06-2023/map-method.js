const names = ["yash","jay","chirag"];

const mrNames = names.map((names)=>{
    return "mr" + names;
});
console.log(mrNames);

let array1 = [1,2,3,4,5,6,7,8];
let array2 = [];

array2 = array1.map((value)=>{
    console.log(value);
    return value * 2;
});
console.log(array2);