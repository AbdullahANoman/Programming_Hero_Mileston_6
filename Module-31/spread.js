const max = Math.max(10,20,30,409,80);
// console.log(max);

const numbers = [10,20,30,409,2303,89];

// const breakArray = (...numbers);

// console.log(breakArray);
const largest = Math.max(...numbers);
console.log(largest);

// console.log(...numbers);


const numbers2 = [...numbers];
const numbers3 = [10,20,30,...numbers,50,70];

numbers2.push(10);

console.log('Numbers 1 : ', numbers);
console.log('Numbers 2 : ', numbers2);
console.log('Numbers 3 : ', numbers3);
