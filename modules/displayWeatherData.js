import climaInfo from "./climaInfo.js"



function displayWeatherData (weatherSection, weatherInfo) {


    let sectionCardContainer = document.createElement('section')
    let nodeSectionCardContainer =weatherSection.appendChild(sectionCardContainer)
    nodeSectionCardContainer.className = "Contenedor__Tarjetas"

    displayWeatherTitles (nodeSectionCardContainer)

    
    weatherInfo.forEach(data => {
        const tarjetaClima = new climaInfo(nodeSectionCardContainer,data)
        tarjetaClima.getCard()
    });
}



function displayWeatherTitles (contenedor) {
    const title = [
        `Temperatura Mínima: `,
        `Temperatura Máxima: `,
        `Dirección Viento: `,
        `Velocidad Viento: `,
        `Probabilidad Lluvia: `,
        `Precipitación: `,
    ]
    const sectionCardContainer = document.createElement('section')
    const nodeSectionCardContainer =contenedor.appendChild(sectionCardContainer)
    nodeSectionCardContainer.className = "TarjetaTitulo"

    title.forEach(mensaje =>createInfo(mensaje,nodeSectionCardContainer,'p'))
}

function createInfo (mensaje,node,element) {
    const newNode = document.createElement(element)
    const text = mensaje
    const textNode = document.createTextNode(text)
    newNode.appendChild(textNode)
    node.appendChild(newNode)
}

export default displayWeatherData;