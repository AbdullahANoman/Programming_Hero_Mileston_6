function userData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
}
function userPicture(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=>res.json())
    .then(data=>console.log(data));
}

function userAlbums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res=>res.json())
    .then(data => display(data))
}

function display(data){
    console.log(data)
}