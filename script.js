class cardClimaInfo {
    constructor (section,{low_temp, max_temp,wind_cdir,valid_date, precip, pop}) {
        this.section = section
        this.info =[
            `Fecha: ${valid_date}`,
            `Temp. Minima: ${low_temp}°C`,
            `Temp. Maxima: ${max_temp}°C`,
            `Dire. Viento: ${wind_cdir}`,
            `Probabilidad Lluvia: ${pop}%`,
            `Precipitación: ${precip}mm`
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

function tomaCiudad () {
    const cityName = document.getElementById("inputCity").value

    getCoordinates(cityName)
        .then(weatherBit,wrongPlace)
        .then(cargarDatoPantalla)
}


const boton = document.getElementById("btn")

boton.addEventListener('click',tomaCiudad);








