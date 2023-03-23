// function add(num1,num2){
//     if( num2 == undefined)
//     {
       
//         num2= 0
//     }
//     if(num1 == undefined){
//         num1=0;
//     }
//     const sum = num1+num2;
//     return sum;
// }


function add(num1 = 0, num2 =0){
    const sum = num1+num2;
    return sum;
}
const result = add(40);
console.log(result);

function name(first,last='Patwary'){
    const name = first + ' ' + last;
    return name;
}
const fullName = name ('noman');
console.log(fullName)