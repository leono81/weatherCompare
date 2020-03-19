class cardClimaInfo {
    constructor (section,{tempMin, tempMax,windDir,name, precip, pop,windSpeed}) {
        this.section = section
        this.apiSource = name
        this.info =[
            `Temp. Minima: ${tempMin}°C`,
            `Temp. Maxima: ${tempMax}°C`,
            `Dire. Viento: ${windDir}`,
            `Vel. Viento: ${windSpeed.toFixed(2)}km/h`,
            `Probabilidad Lluvia: ${pop.toFixed(2)}%`,
            `Precipitación: ${precip.toFixed(2)}mm`
        ]
    }

    getCard () {
        const sectionCardContainer = document.createElement('section')
        const nodeSectionCardContainer =this.section.appendChild(sectionCardContainer)
        nodeSectionCardContainer.className = "Tarjeta"


        this.info.forEach(mensaje =>this.createInfo(mensaje,nodeSectionCardContainer,'p'))

    }

    createInfo (mensaje,node,element) {
        const newNode = document.createElement(element)
        const text = mensaje
        const textNode = document.createTextNode(text)
        newNode.appendChild(textNode)
        node.appendChild(newNode)
    }
}

export default cardClimaInfo;