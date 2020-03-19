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

export default getCoordinates;