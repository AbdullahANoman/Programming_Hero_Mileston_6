const loadingApi = () =>{
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-02-10&sortBy=publishedAt&apiKey=64a510dd21444a98b016d4fe8ee034aa`)
    .then(res=>res.json())
    .then(data => displayData(data.articles.slice(0,10)))
}


const displayData = data =>{
    console.log(data)
    const articles = data ;
    const container = document.getElementById('container')
    for(const article of articles){
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        
            <img src="${article.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          
        `
        container.appendChild(div)
    }
}
loadingApi()