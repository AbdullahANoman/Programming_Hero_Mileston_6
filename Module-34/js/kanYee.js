function clickKanYee(){
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => display(data))
}

function display(posts){
    const container = document.getElementById('container');
    console.log(posts);
    // const div = document.createElement('div');
    container.innerHTML=posts.quote;
    // container.appendChild(div);
}