
// const takeFriend = (array) => {
//     const noman = array.length;
//     if(noman%2==0){
//         return noman;
//     }
//     else{
//         array.push('Sakib');
//         return takeFriend();
//     }
// }

function takeFriend(a){
    
    if(a.length %2 == 0 ){
        return a.length;
    }
    else{
        a.push('Sakib');
        takeFriend();
    }
}
const friends = ['Samid','Mohammad','Tanjid','Akash','Faysal'];
const result = takeFriend(friends);
console.log(result)