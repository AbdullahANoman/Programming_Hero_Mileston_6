function userTest() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => display(data))
}
function display(data) {

    for (const user of data) {
        const ul = document.getElementById('container-ul');
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}
