import climaInfo from "./climaInfo.js"
import {createInfo} from "../assets/tools.js"



function displayWeatherData (weatherSection, weatherInfo) {
    let sectionCardContainer = document.createElement('section')
    let nodeSectionCardContainer =weatherSection.appendChild(sectionCardContainer)
    nodeSectionCardContainer.className = "Contenedor__Tarjetas"

    displayWeatherTitles (nodeSectionCardContainer)

    
    weatherInfo.weatherData.forEach(data => {
        const tarjetaClima = new climaInfo(nodeSectionCardContainer,data)
        tarjetaClima.getCard()
    });

    createInfo(weatherInfo.source,nodeSectionCardContainer,'h3','api__source')
}

function displayWeatherTitles (contenedor) {
    const title = [
        `Temp. Mínima: `,
        `Temp. Máxima: `,
        `Dir. Viento: `,
        `Vel. Viento: `,
        `Prob. Lluvia: `,
        `Precipitación: `,
        `Humedad:`,
        `Indice UV:`
    ]
    const sectionCardContainer = document.createElement('section')
    const nodeSectionCardContainer =contenedor.appendChild(sectionCardContainer)
    nodeSectionCardContainer.className = "TarjetaTitulo"

    title.forEach(mensaje =>createInfo(mensaje,nodeSectionCardContainer,'p'))
}

export default displayWeatherData;


