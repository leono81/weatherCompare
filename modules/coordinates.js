import myKeys from '../assets/config.js'

async function getCoordinates (place) { 
    const placeName = place
    const urlGeoCode = `https://maps.googleapis.com/maps/api/geocode/json?address=${placeName}&key=${myKeys.googleKey}`
    const callURL = await fetch (urlGeoCode)
    const response = await callURL.json()
    return response
}

export default getCoordinates;