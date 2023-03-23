const array1 =[10,20,30];
const array2 = [100,200,300];

const resultOfArray = a => Math.max(...a);

const newArray = [...array1,...array2];
const result = resultOfArray(newArray);
console.log(result);