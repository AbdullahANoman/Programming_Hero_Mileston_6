const fetchItem = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayItem(data.meals))
}


const displayItem = eats => {
    const container = document.getElementById('container');
    container.innerHTML = ''
    for (const eat of eats) {
        console.log(eat)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
          <img src="${eat.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${eat.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <button type="button" onclick = loadDetails(${eat}); class="btn btn-primary w-50 " data-bs-toggle="modal" data-bs-target="#exampleModal">
          Details
        </button>
        </div>
        `
        container.appendChild(div);
    }
}

const loadDetails = eat =>{
    console.log(eat.strMeal)
    document.getElementById('exampleModalLabel').innerText = eat.strMeal;
}

const btnClick = () =>{
    const searchValue = document.getElementById('searchMeal').value;
    fetchItem(searchValue);
}
