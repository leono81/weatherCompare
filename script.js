class cardClimaInfo {
    constructor (section,tempMin, tempMax,windDir,date, precip, pop) {
        this.section = section
        this.tempMin = tempMin
        this.tempMax = tempMax
        this.windDir = windDir
        this.date = date
        this.pop = pop
        this.precip = precip
    }

    creaData () {
        const sectionCardContainer = document.createElement('section')
        const nodeSectionCardContainer =this.section.appendChild(sectionCardContainer)
        nodeSectionCardContainer.className = "Contenedor__Tarjeta"

        const nodeFecha = document.createElement('p')
        const textFecha = `Fecha: ${this.date}`
        const textFechaNode = document.createTextNode(textFecha)
        nodeFecha.appendChild(textFechaNode)
        nodeSectionCardContainer.appendChild(nodeFecha)

        const nodeTempMin = document.createElement('p')
        const textTempMin = `Temp. Minima: ${this.tempMin}°C`
        const textTempMinNode = document.createTextNode(textTempMin)
        nodeTempMin.appendChild(textTempMinNode)
        nodeSectionCardContainer.appendChild(nodeTempMin)

        const nodeTempMax = document.createElement('p')
        const textTempMax = `Temp. Maxima: ${this.tempMax}°C`
        const textTempMaxNode = document.createTextNode(textTempMax)
        nodeTempMax.appendChild(textTempMaxNode)
        nodeSectionCardContainer.appendChild(nodeTempMax)

        const nodePop= document.createElement('p')
        const textPop = `Probabilidad Lluvia: ${this.pop}%`
        const textPopNode = document.createTextNode(textPop)
        nodePop.appendChild(textPopNode)
        nodeSectionCardContainer.appendChild(nodePop)


        const nodePrecip = document.createElement('p')
        const textPrecip = `Precipitación: ${this.precip}mm`
        const textPrecipNode = document.createTextNode(textPrecip)
        nodePrecip.appendChild(textPrecipNode)
        nodeSectionCardContainer.appendChild(nodePrecip)
    }
}

async function getCoordinates (place) { 
    const googleKey = 'AIzaSyC83rUSdXBFL44H6Ik4yKUlVTgj-rV9lyU'
    const placeName = place
    const urlGeoCode = `https://maps.googleapis.com/maps/api/geocode/json?address=${placeName}&key=${googleKey}`
    const callURL = await fetch (urlGeoCode)
    const response = await callURL.json()
    console.log(response)
    const location = await response.results[0].geometry.location
    return location
}

async function weatherBit (coor) {
    const apiKey = '6cb027be27944c8a9fbcb289000c40d4'
    const {lat, lng} = coor
    const dias = 5
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${apiKey}&days=${dias}`
    const route = await fetch(url)
    const response = await route.json()
    console.log(response)
    return response
}

function wrongPlace () {
    alert('Ciudad No encontrada')
}

function cargarDatoPantalla(weatherInfo) {
    const ciudad = document.getElementById('resultadoBusqueda__nombre_ciudad')
    const lugar = weatherInfo.city_name
    const weatherSection = document.getElementById('resultadoBusqueda')
    
    ciudad.innerHTML = `<h2>Ciudad: ${lugar}</h2>`  
    
    weatherInfo.data.forEach(data => {
        const {low_temp, max_temp, wind_cdir, valid_date, precip, pop} = data
        const tarjetaClima = new cardClimaInfo(weatherSection,low_temp, max_temp,wind_cdir,valid_date, precip, pop)
        tarjetaClima.creaData()
    });
}

function tomaCiudad () {
    const cityName = document.getElementById("inputCity").value

    getCoordinates(cityName)
        .then(weatherBit,wrongPlace)
        .then(cargarDatoPantalla)
}


const boton = document.getElementById("btn")

boton.addEventListener('click',tomaCiudad);








