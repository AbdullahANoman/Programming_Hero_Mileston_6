function clickPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data =>displayPost(data))
}
clickPost();
function displayPost(posts){
    const container =document.getElementById('noman');

    for(const post of posts){
        const div = document.createElement('div');
        console.log(post);
        div.classList.add('style-sec')
        div.innerHTML= `
        <p> User Id : ${post.id}</p>
        <h3> Title : ${post.title}</h3>
        <h6>Body : ${post.body}</h6>

        `
        container.appendChild(div);
    }
}
