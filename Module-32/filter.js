const numbers = [101,20,4,8,12,120,240];

// const result = numbers.map(num => num+2);
// console.log(result);

const bigNumbers = numbers.filter(num => num>20);

console.log(bigNumbers);

const products = [
    {id:1, name:'Laptop', price:10000},
    {id:2, name:'Mobile', price:25000},
    {id:3, name:'MacBook', price:15000},
]

const lessPrice = products.filter(product => product.price>10000);
const nameLessPriceProduct = lessPrice.map(product => product.name);
console.log(lessPrice);
console.log(nameLessPriceProduct);