const user = {
    id:1,
    name : 'Noman',
    education : 'HSC'
}

console.log(user);
console.log(JSON.stringify(user));
console.log(JSON.parse(JSON.stringify(user)));

const shop = {
    owner : "Noman",
    outletPlace : {
        location1 : 'Kochuhet',
        location2 : 'Dhanmondi'
    },
    products :
        ['Laptop','Mobile','Freeze']
    
}
console.log(shop);
const convertToJson = JSON.stringify(shop);
console.log(convertToJson)