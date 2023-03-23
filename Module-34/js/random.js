function clickAdd(){
    fetch('https://randomuser.me/api/')
    .then(res=>res.json())
    .then(data => display(data))
}
clickAdd();
function display(posts){
    const name = document.getElementById('name');
    const address = document.getElementById('address');
    name.innerHTML = posts.results[0].name.first + ' ' + posts.results[0].name.last;
    
}