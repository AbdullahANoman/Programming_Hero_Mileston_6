function showClosure (){
    let counter = 0;
   return function (){
        counter++;
        return counter;
    }
    
}
const result = showClosure();
console.log(result())
console.log(result())
console.log(result())