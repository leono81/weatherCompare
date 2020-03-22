class climaInfo {
    constructor (section,{tempMin, tempMax,windDir,name, precip, pop,windSpeed}) {
        this.section = section
        this.apiSource = name
        this.info =[
            `${tempMin}°C`,
            `${tempMax}°C`,
            `${windDir}`,
            `${windSpeed.toFixed(2)}km/h`,
            `${pop.toFixed(2)}%`,
            `${precip.toFixed(2)}mm`
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

export default climaInfo;