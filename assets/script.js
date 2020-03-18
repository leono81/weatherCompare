import cardClimaInfo from "../modules/cardClima.js"
import getCoordinates from "../modules/coordinates.js"
import datosClima from "../modules/datosClima.js"


function wrongPlace () {
    alert('Ciudad No encontrada')
}

function cargarDatoPantalla(weatherInfo) {
    const ciudad = document.getElementById('resultadoBusqueda__nombre_ciudad')
    const lugar = weatherInfo.city_name
    const weatherSection = document.getElementById('resultadoBusqueda')
    ciudad.innerHTML = `<h2>Ciudad: ${lugar}</h2>`  
    
    for (let i=0;i<2;i++){
        let sectionCardContainer = document.createElement('section')
        let nodeSectionCardContainer =weatherSection.appendChild(sectionCardContainer)
        nodeSectionCardContainer.className = "Contenedor__Tarjetas"
        
        weatherInfo.data.forEach(data => {
            const tarjetaClima = new cardClimaInfo(nodeSectionCardContainer,data)
            tarjetaClima.getCard()
        });

    }
}

async function tomaCiudad () {
    const cityName = document.getElementById("inputCity").value

    const coor = await getCoordinates(cityName)

    const weather = new datosClima(coor)
    const weatherData = weather.getWeatherData()
    
}


const boton = document.getElementById("btn")

boton.addEventListener('click',tomaCiudad);








