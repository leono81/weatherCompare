import climaInfo from "../modules/climaInfo.js"
import getCoordinates from "../modules/coordinates.js"
import datosClima from "../modules/datosClima.js"
import arrayOfInfo from "../testInfo.js"


function wrongPlace () {
    alert('Ciudad No encontrada')
}

function cargarDatoPantalla(weatherData,coor) {
 
    const weatherSection = document.getElementById('resultadoBusqueda')
    
    
    for (let weatherInfo of weatherData){
        let sectionCardContainer = document.createElement('section')
        let nodeSectionCardContainer =weatherSection.appendChild(sectionCardContainer)
        nodeSectionCardContainer.className = "Contenedor__Tarjetas"

        
        weatherInfo.forEach(data => {
            const tarjetaClima = new climaInfo(nodeSectionCardContainer,data)
            tarjetaClima.getCard()
        });

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








