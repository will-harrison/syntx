const CurrentWeather = (city = '') => `https://api.openweathermap.org/data/2.5/weather?q=${city},us&units=imperial&appid=82967109852974c2642ff72bd8f8856c`
const DailyForecast = (city = '') => `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city},us&units=imperial&cnt=6&appid=82967109852974c2642ff72bd8f8856c`
const BulkForecast = (cities = []) => {
  let cityIdString = ''
  let cityList = cities.map(c => {
    cityIdString = cityIdString + ',' + c.id
  })
  return `http://api.openweathermap.org/data/2.5/group?id=${cityList},us&units=imperial&cnt=7&appid=82967109852974c2642ff72bd8f8856c`
}

export const getWeatherByCity = (city) => {
  return fetch(CurrentWeather(city))
    .then(res => res.json())
    .catch(err => { throw new Error(err) })
}

export const getForecastByCity = (city) => {
  return fetch(DailyForecast(city))
    .then(res => res.json())
    .catch(err => { throw new Error(err) })
}

export const getForecastsByCityId = (cityList) => {
  return fetch(BulkForecast(cityList))
    .then(res => res.json())
    .catch(err => { throw new Error(err) })
}