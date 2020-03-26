import displayWeatherData from "../modules/displayWeatherData.js"
import getCoordinates from "../modules/coordinates.js"
import datosClima from "../modules/datosClima.js"
import {createInfo, addConsecutiveDays, loadingScreen, noLoadingScreen} from "./tools.js"
import config from "./config.js"



function wrongPlace () {
    alert('Ciudad No encontrada')
}

function cargarDatoPantalla(weatherData, location) {
    let coor = location.results[0].geometry.location
    let nombreCiudad = location.results[0].formatted_address
    ciudad.innerHTML = nombreCiudad
        
    displayTitles()

    var img = new Image();
    img.src = `http://maps.googleapis.com/maps/api/staticmap?zoom=9&size=600x350&markers=color:red%7C${coor.lat},${coor.lng}&key=${config.googleKey}`
    mapa.appendChild(img)


    for (let weatherInfo of weatherData){
        displayWeatherData(weatherSection, weatherInfo)
        createInfo('',weatherSection,'hr')
    }

    noLoadingScreen()

}

function displayTitles(){
    let consecutiveDays = []
    loadingScreen(weatherSection, mapa, ciudad)
    addConsecutiveDays(consecutiveDays, 5)
    
    consecutiveDays.unshift('')
    consecutiveDays.push('Datos origen')

    let tableTitle = createInfo('',weatherSection,'section','title__table')

    consecutiveDays.forEach(mensaje => createInfo(mensaje,tableTitle,'p'))

}


async function searchWeatherInfo () {
    loadingScreen(weatherSection, mapa, ciudad)
    const cityName = input.value
    const location = await getCoordinates(cityName)
    const weather = new datosClima(location)
    const weatherData = await weather.getWeatherData()
    cargarDatoPantalla(weatherData, location)
}

const weatherSection = document.getElementById('resultadoBusqueda')
let ciudad = document.getElementById('resultadoBusqueda__nombre_ciudad')
let mapa = document.getElementById('mapa')
const boton = document.getElementById("btn")
let input = document.getElementById('inputCity')
boton.addEventListener('click',searchWeatherInfo);


//Google autocomplete search
let autocomplete = new google.maps.places.Autocomplete(input);
autocomplete.setFields(
    ['address_components', 'geometry', 'icon', 'name']
);

autocomplete.addListener('place_changed', () => {
    var place = autocomplete.getPlace();
    if (!place.geometry) {
        window.alert("No details available for input: '" + place.name + "'");
    }
})







