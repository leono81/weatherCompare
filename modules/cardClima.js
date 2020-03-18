class cardClimaInfo {
    constructor (section,{low_temp, max_temp,wind_cdir,valid_date, precip, pop,wind_gust_spd}) {
        this.section = section
        this.info =[
            `Fecha: ${valid_date}`,
            `Temp. Minima: ${low_temp}°C`,
            `Temp. Maxima: ${max_temp}°C`,
            `Dire. Viento: ${wind_cdir}`,
            `Vel. Viento: ${wind_gust_spd.toFixed(2)}km/h`,
            `Probabilidad Lluvia: ${pop}%`,
            `Precipitación: ${precip.toFixed(2)}mm`
        ]
    }

    getCard () {
        const sectionCardContainer = document.createElement('section')
        const nodeSectionCardContainer =this.section.appendChild(sectionCardContainer)
        nodeSectionCardContainer.className = "Tarjeta"

        this.info.forEach(mensaje =>this.creaInfo(mensaje,nodeSectionCardContainer))

    }

    creaInfo (mensaje,node) {
        const newNode = document.createElement('p')
        const text = mensaje
        const textNode = document.createTextNode(text)
        newNode.appendChild(textNode)
        node.appendChild(newNode)
    }
}

export default cardClimaInfo;