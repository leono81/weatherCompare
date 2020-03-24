import climaInfo from "./climaInfo.js"



function displayWeatherData (weatherSection, weatherInfo) {
    displayTitles(weatherSection)
    let sectionCardContainer = document.createElement('section')
    let nodeSectionCardContainer =weatherSection.appendChild(sectionCardContainer)
    nodeSectionCardContainer.className = "Contenedor__Tarjetas"

    displayWeatherTitles (nodeSectionCardContainer)

    
    weatherInfo.forEach(data => {
        const tarjetaClima = new climaInfo(nodeSectionCardContainer,data)
        tarjetaClima.getCard()
    });
}

function displayTitles(weatherSection){
    let consecutiveDays = []

    addConsecutiveDays(consecutiveDays)
    
    consecutiveDays.unshift('')

    let tableTitle = createInfo('',weatherSection,'section','title__table')

    consecutiveDays.forEach(mensaje => createInfo(mensaje,tableTitle,'p'))
    

}

function addConsecutiveDays (lista) {

    let index = lista.length

    if ( index > 4) {
        return lista
    }
    else {
        let date = new Date
        date.setDate(date.getDate() + index)
        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        let fullDate = `${day}/${month}/${year}`

        lista.push(fullDate)
        addConsecutiveDays(lista)
    }
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

function createInfo (mensaje,node,element,className = '') {
    const newNode = document.createElement(element)
    const text = mensaje
    const textNode = document.createTextNode(text)
    newNode.appendChild(textNode)
    node.appendChild(newNode)
    newNode.className = className
    return newNode
}

export default displayWeatherData;


