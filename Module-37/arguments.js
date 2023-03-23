function number (a,b,c,d){
    const arg = [...arguments] ;
    console.log(arg)

    console.log('Numbers Are : ', a,b,c);
}

console.log(number.length)

const numbers =  number (10,15,20,40,50);
