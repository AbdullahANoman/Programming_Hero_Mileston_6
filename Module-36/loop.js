const bottle ={
    color: 'Red',
    price : 50, 
    isCleaned : true ,
    capacity : 4
}

const keys = Object.keys(bottle);

for(const key of keys ){
    // console.log(key , bottle[key])
}

for(const key in bottle){
    console.log(key, bottle[key])
}

for(const [key, value] of Object.entries(bottle)){
    console.log(key,value)
}