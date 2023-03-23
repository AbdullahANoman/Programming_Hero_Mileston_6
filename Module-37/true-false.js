/*


TRUTHY : 
1. true 
2.any number (+ve,-ve) show true but 0 do not show true
3. Any string other than empty string 
4. '0' , 'false'
5. {} (empty object )
6. [] (empty array )

FALSY : 
1.false
2. 0 
3. '' (empty string)
4. undefined
5. null
*/
let x=[10,209];
if(x){
    console.log('This is truthy .');
}
else{
    console.log('This is falsy ')
}

