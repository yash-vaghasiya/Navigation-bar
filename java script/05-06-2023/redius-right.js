const a  = ["1","h","s","a","y"];
const right = a.reduceRight((prev ,cur)=>{
    return prev + cur;
});
console.log(right);
const left = a.reduce((prev , cur)=>{
    return prev + cur;
});
console.log(left);

const b  = [1,2,3,5,4,2,6];
const right1 = b.reduceRight((prev ,cur)=>{
    return prev + cur;
});
console.log(right1);
const left1 = b.reduce((prev , cur)=>{
    return prev + cur;
});
console.log(left1);
