function doItDoubles(numbers){
    return numbers*2;
}
const numberDouble = (num) =>num*2;
const array = [10,20,30,40];
const result = doItDoubles(array);
// console.log(result);

const newMapArray= array.map(doItDoubles);
console.log(newMapArray)