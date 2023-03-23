function greeting(noman,name){
    noman(name);
}

function greetMorning(name){
    console.log('Good Morning ' , name);
}
function greetEvening(name){
    console.log('Good Evening ' , name);
}
function greetNight(name){
    console.log('Good Night ' , name);
}
// greeting(noman)
greeting(greetMorning,'Abdullah Al Noman');
greeting(greetNight,'Sultana Akhi');


function clickButton(){
    console.log('btn-clicked')
}

document.getElementById('btn').addEventListener('click' ,clickButton)