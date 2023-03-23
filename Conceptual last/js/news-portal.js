const fetchCategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res =>res.json()).then(data=> showAllData(data.data))
}

const showAllData = data => {
    const categoriesContainer = document.getElementById('categories-container');
    
    data.news_category.forEach(singleCategory=>{
        // categoriesContainer.innerHTML+=`<a class="nav-link" onclick = displayCategoryNews('${singleCategory.category_id}','${singleCategory.category_name}'); href="#">${singleCategory.category_name}</a>`;
        const p = document.createElement('p');
        p.innerHTML = `
        <a class="nav-link" href="#" onclick = "displayCategoryNews('${singleCategory.category_id}','${singleCategory.category_name}')"; >${singleCategory.category_name}</a>
        `
        categoriesContainer.appendChild(p);
    })
}

const displayCategoryNews= (category_id,category_name)=>{
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`

    fetch(url).then(res=>res.json())
    .then(data=>showAllNews(data,category_name))
}

const showAllNews = (data,category_name) =>{
    const count = document.getElementById('category-count');
    const categoriesName = document.getElementById('category-name');
    categoriesName.innerHTML = `${category_name}`;
    count.innerHTML = `${data.data.length}`
}
