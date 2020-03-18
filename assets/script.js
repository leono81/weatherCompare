import cardClimaInfo from "../modules/cardClima.js"
import getCoordinates from "../modules/coordinates.js"
import datosClima from "../modules/datosClima.js"


function wrongPlace () {
    alert('Ciudad No encontrada')
}

function cargarDatoPantalla(weatherData) {
    // const ciudad = document.getElementById('resultadoBusqueda__nombre_ciudad')
    // const lugar = weatherInfo.city_name
    // ciudad.innerHTML = `<h2>Ciudad: ${lugar}</h2>`  
    const weatherSection = document.getElementById('resultadoBusqueda')
    
    for (let weatherInfo of weatherData){
        let sectionCardContainer = document.createElement('section')
        let nodeSectionCardContainer =weatherSection.appendChild(sectionCardContainer)
        nodeSectionCardContainer.className = "Contenedor__Tarjetas"
        
        weatherInfo.forEach(data => {
            const tarjetaClima = new cardClimaInfo(nodeSectionCardContainer,data)
            tarjetaClima.getCard()
        });

    }
}

async function searchWeatherInfo () {
    const cityName = document.getElementById("inputCity").value
    const coor = await getCoordinates(cityName)
    const weather = new datosClima(coor)
    const weatherData = await weather.getWeatherData()
    cargarDatoPantalla(weatherData, coor)
}


const boton = document.getElementById("btn")

boton.addEventListener('click',searchWeatherInfo);








