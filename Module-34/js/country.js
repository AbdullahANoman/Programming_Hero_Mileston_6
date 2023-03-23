const connectFetch = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => display(data))
}
connectFetch();
const display = countrys =>{
    const container = document.getElementById('country');
    for(const country of countrys){
        const div = document.createElement('div');
        div.classList.add('styleCountry');
        div.innerHTML =`
        <h4>Country Name : ${country.name.common}</h4>
        <h5>Capital Name: ${country.capital ?country.capital[0] : 'No Capital'}</h5>
        <button onclick=displayShort('${country.cca2}')>Details Of Country</button>
        `
        container.appendChild(div);
    }
}

const displayShort = code =>{
    const url = `https://restcountries.com/v3.1/name/${code}`;
    fetch(url)
    .then(res=>res.json())
    .then(data =>showCountryAll(data[0]))

}

const showCountryAll=data =>{
    const countryShort = document.getElementById('country-short');
    countryShort.innerHTML=`
    <p>Name : ${data.name.common}</p>
    <img src="${data.flags.png}">
    `
}