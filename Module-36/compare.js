const first = {a:2, b:3, c:5};
const second = {a:2, c:5 , b:5};

function compareObject (first,second){
    const firstKeys = Object.keys(first);
    const secondkeys = Object.keys(second);
    if(firstKeys.length === secondkeys.length){
        for(const key of secondkeys){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

const result = compareObject(first,second);
console.log(result) 