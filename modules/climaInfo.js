import {createInfo} from "../assets/tools.js"
class climaInfo {
    constructor (section,{tempMin, tempMax,windDir,name, precip, pop,windSpeed,rh,uvIndex}) {
        this.section = section
        this.apiSource = name
        this.info =[
            `${tempMin}°C`,
            `${tempMax}°C`,
            `${windDir}`,
            `${windSpeed.toFixed(2)}km/h`,
            `${pop.toFixed(2)}%`,
            `${precip.toFixed(2)}mm`,
            `${rh.toFixed(0)}%`,
            `${uvIndex.toFixed(0)}`
        ]
    }

    getCard () {
        const sectionCardContainer = document.createElement('section')
        const nodeSectionCardContainer =this.section.appendChild(sectionCardContainer)
        nodeSectionCardContainer.className = "Tarjeta"


        this.info.forEach(mensaje => createInfo(mensaje,nodeSectionCardContainer,'p'))

    }

}

export default climaInfo;