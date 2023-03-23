const numbers = [10,20,30,40,50];

const half = numbers.map(x=>x/2);
// console.log(half);
const third = numbers.map(x=>x/3);
// console.log(third);


const products = [
    {id:1, name:'laptop', price:'1000 tk'},
    {id:2, name:'MacBook', price:'1000 tk'},
    {id:3, name:'Mobile', price:'1000 tk'}
]

const results = products.map(product => {
    const name = product.name ;
    const price = product.price;
    const id = product.id;
    return id;
});
console.log(results)