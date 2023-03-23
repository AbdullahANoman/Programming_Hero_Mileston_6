const fish ={
    name : 'Hilsha',
    price : 23000,
    address :'chandpur'
};


// object destructing 
const {name,price,address} = fish;

console.log(name,address,price);


// array destructing 
const ages = [10,30,40,29];

const [x,y,z] = ages;


console.log(z,y,x);


// function destructing 
function getNames (){
    return  ['Noman','Akhi']
}

const [MyName,HerName] = getNames();
console.log(HerName,MyName);