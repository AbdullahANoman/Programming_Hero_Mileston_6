
// Primitive types
const a = 5;
const b = 'Abdullah Al Noman';
const c = true ;
//Non primitive types
const d = [10,15,20];
const e = {
    job: 'App Developer'
}

// console.log(typeof a, typeof b, typeof c, typeof d, typeof e);


// primitive data type 
let p = 10;
let q= p;

console.log(p,q);
q= 15;
p=20;

console.log(p,q);
// non primitive data type

let x = {
    name : 'Ab Noman',
    roll : '01'
}
let y = x;
y.name = 'SA Sonia'
// CHANGE FOR NON PRIMITIVE DATA TYPE AND THIS DATATYPE HAVE A ADDRESS THAT'S WHY 
console.log(x,y)