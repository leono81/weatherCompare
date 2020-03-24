import displayWeatherData from "../modules/displayWeatherData.js"
import getCoordinates from "../modules/coordinates.js"
import datosClima from "../modules/datosClima.js"


function wrongPlace () {
    alert('Ciudad No encontrada')
}

function cargarDatoPantalla(weatherData) {
 
    const weatherSection = document.getElementById('resultadoBusqueda')
    
    if (weatherSection.childElementCount > 0){
        weatherSection.innerHTML = ''
    }
    
    for (let weatherInfo of weatherData){
        displayWeatherData(weatherSection, weatherInfo)
    }
}

async function searchWeatherInfo () {
    const cityName = document.getElementById("inputCity").value
    const location = await getCoordinates(cityName)
    const weather = new datosClima(location)
    const weatherData = await weather.getWeatherData()
    cargarDatoPantalla(weatherData, location)
}


const boton = document.getElementById("btn")

boton.addEventListener('click',searchWeatherInfo);








