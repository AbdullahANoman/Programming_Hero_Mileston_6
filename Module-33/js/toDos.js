function toDosApply(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data =>displayToDos(data))
}

function displayToDos(datas){
    const container = document.getElementById('container');
    for(const data of datas)
    {
        const div = document.createElement('div');
        div.innerHTML= `
        <p>User Id :${data.userId}</p>
        <p>Id : ${data.id}</p>
        <p>Tittle : ${data.title}</p>
        <p>Completed : ${data.completed}</p>
        `
        container.appendChild(div);
    }
}

toDosApply();