const bottle ={
    color: 'Red',
    price : 50, 
    isCleaned : true ,
    capacity : 4
}

const keys = Object.keys(bottle);
// console.log(keys);

const values = Object.values(bottle);
// console.log(values);

const pair = Object.entries(bottle);
// console.log(pair)

console.log(bottle);
// Object.seal(bottle);
Object.freeze(bottle)
bottle.price = 1000;
delete bottle.isCleaned;
bottle.height = 100;

console.log(bottle)