// Se definen dos variables donde se guardaran los elementos llamados por id
let searchBtn = document.getElementById('search-btn');
let countryInp = document.getElementById('country-inp');

// Se escucha el evento del boton
searchBtn.addEventListener('click', () => {
    // Se obtiene el nombre del pais que digita el usuario
    let countryName = countryInp.value;
    // Utilizamos la API y le enviamos el nombre del pais para completar la URL
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);

    // Generamos una respuesta donde se almacenan todos los datos y utilizamos la URL
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(Object.keys (data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values (data[0].languages).toString().split(",").join(","));
    });
})