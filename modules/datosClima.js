import myKeys from '../assets/config.js'

class datosClima{
    constructor (location){
        this.lng = location.results[0].geometry.location.lng
        this.lat = location.results[0].geometry.location.lat
        this.days = 5
        this.format = 'metric'
        this.lang = 'es'
    }

    async getWeatherData () {
        const weatherData = await Promise.all([this.weatherBit(),this.darkSky()])
           .then(result => result)  
        return weatherData
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
                const {uv, rh,low_temp,max_temp,wind_cdir,wind_spd,pop, precip} = data
                const dataObj = {
                    tempMin: low_temp,
                    tempMax: max_temp,
                    windDir: wind_cdir,
                    windSpeed: wind_spd,
                    pop,
                    precip,
                    rh,
                    uvIndex: uv


                }
                weatherData.push(dataObj)
            }
            let weatherInfo ={
                weatherData,
                source: 'weatherBit'
            }
            
            return(weatherInfo)

        } catch (error) {
            console.log(error)
        }
    }
    
    async darkSky () {
        const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${myKeys.darkSkyKey}/${this.lat},${this.lng}?exclude=minutely,hourly&units=si&lang=es`
        const weatherData =[]
        try {
            const resp = await this.getInfo(url)


            for (let i = 0; i < 5; i++) {
                const {uvIndex, humidity, temperatureMin, temperatureMax,windBearing,windSpeed,precipProbability,precipIntensityMax} = resp.daily.data[i]
                const dataObj = {
                    tempMin: temperatureMin,
                    tempMax: temperatureMax,
                    windDir: windBearing,
                    windSpeed,
                    pop: precipProbability * 100,
                    precip: precipIntensityMax,
                    rh: humidity * 100,
                    uvIndex
                }
                weatherData.push(dataObj)
            }

            let weatherInfo ={
                weatherData,
                source: 'Dark Sky'
            }

            return(weatherInfo)
        } catch (error) {
            console.log(error)
        }

    }
}


export default datosClima;