// problem -1 
const numbers = [1,3,5,7,9];

const even =[];
for(const number of numbers){
    result1= number+1;
    even.push(result1);
}
// console.log(even);

// with map 
const doIt = (num) =>num+1;
const display1 = numbers.map(doIt);


// console.log(display1);

// problem -2 

const array = [33,50,79,78,90,101,30];

const display2 = array.filter(num =>num%10==0);

// console.log(display2)

// problem-3
const display3 = array.find(num =>num%10 ==0);
// console.log(display3)
// PROBLEM -4 

const array2 = [1,9,17,22];

let sum =0;
for(var i =0 ; i<array2.length; i++){
    let elements = array2[i];
    sum+=elements;
}
// console.log(sum);

const result2 = array2.reduce((p,c)=>p+c,0);
console.log(result2)