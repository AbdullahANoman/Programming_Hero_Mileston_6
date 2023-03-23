const noman = (numbers) =>
{
    let squareNumber=0;
    for(const number of numbers){
         const multipie = number*number;
         squareNumber+=multipie;
    }
    return squareNumber/numbers.length;
}

const  elements = [2,3,4,5,100];
const result = noman(elements);
console.log(result)