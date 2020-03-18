import myKeys from '../config.js'

class datosClima{
    constructor (coor){
        this.lng = coor.lng
        this.lat = coor.lat
        this.days = 5
        this.format = 'metric'
        this.lang = 'es'
    }

    getWeatherData () {
        // const darkSkyData = this.darkSky()
        const weatherBitData = this.weatherBit()
    }

    async getInfo (url)  {
        const route = await fetch(url)
        const response = await route.json()
        return response
    }

    async weatherBit () {
        const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${this.lat}&lon=${this.lng}&key=${myKeys.weatherBitKey}&days=${this.days}`
        const weatherData =[]
        try {
            const resp = await this.getInfo(url)
            for (let data of resp.data) {
                const {low_temp,max_temp,wind_cdir,wind_spd,pop, precip} = data
                const dataObj = {
                    low_temp,
                    max_temp,
                    wind_cdir,
                    wind_spd,
                    pop,
                    precip
                }
                weatherData.push(dataObj)
            }
            return(weatherData)
            
        } catch (error) {
            console.log(error)
        }
    }
    
    async darkSky () {
        const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${myKeys.darkSkyKey}/${this.lat},${this.lng}?exclude=minutely,hourly&units=si&lang=es`
        try {
            const route = await fetch(url)
            const response = await route.json()
            console.log(response)
        } catch (error) {
            console.log(error)
        }

    }
}


export default datosClima;