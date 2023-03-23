// Ways To Create Object 

// 1. Object Literal Syntax 
const person5 = {
    firstName : 'Abdullah Al',
    lastName : 'Noman'
}

// console.log(person.firstName+ ' ' + person.lastName)

// 2. Object Constructor 
const person1 = new Object ();

person1.firstName = 'Abdullah Al',
person1.lastName = 'Noman',
// console.log(person1.firstName)

// 3.Constructor Function 
function Person (firstName,lastName){
    this.firstName= firstName;
    this.lastName = lastName;
}

const person2 = new Person('Abdullah' ,'Doe');
console.log(person2)