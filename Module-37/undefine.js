// 8 ways to get undefined data type 


// 1. variable no initialized will give undefine 
// 2. function with no return give undefine 
// 3. parameter not passed that give undefine 
// 4. If return has nothing on the right will give undefine
// 5. if a object has not property but called this property then show undefine
// 6. Accessing elements outside of the index range that's show's undefine
// 7. deleting a element inside in an array 
// 8. set a value directly undefined

let first ;

function second(a,b){
    const total = a+b;
}
function third(a,b,c,d){
    const total = a+b+c+d;
    // console.log(a,b,c,d)
}
third(10,20)
const result = second(10,20)
// console.log(result)

function noNegative(a,b){
    if(a<0 || b<0 ){
        return;
    }
    return a+b;
}
const result1 = noNegative(10,-20);
// console.log(result1)

const fifth = {
    name : 'Noman',
    age:45
}
// console.log(fifth.name, fifth.time);
const sixth = [10,20,30,40,50];
delete sixth[1];
// console.log(sixth)
// console.log(sixth[1],sixth[100])

const object = {
    noman : undefined,
}
const object1 = {
    name : null,
}
console.log( typeof object1.name)
console.log(typeof object.noman)