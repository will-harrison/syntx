import React from 'react'
import { Text, View } from 'react-native'
import { getWeatherByCity, searchWeather } from './api/weather'
import { FlexColumn, Row, Txt, Theme } from './components/theme'
import WeatherHome from './components/weather/WeatherHome'
import Search from './components/weather/Search'

class App extends React.Component {
  state = {
    cityList: ['Portland', 'Seattle', 'New York', 'Sandpoint'],
    currentCity: '',
    error: '',
    weatherData: {},
    testing: true
  }

  componentDidMount() {
    let { cityList, currentCity, testing } = this.state
    if (testing) {
      this.setState(state => {
        return {
          ...state,
          currentCity: cityList[cityList.length - 1]
        }
      }, () => this.searchWeather(this.state.currentCity))
    }
    // let cityData = cityList.map(c => {
    //   return Promise.all(
    //     getWeatherByCity(c)
    //   )
    // })
  }

  searchWeather = (city) => {
    console.log(city)
    getWeatherByCity(city)
      .then(weatherData => {
        if (weatherData.cod === 200) {
          this.setState(state => {
            return {
              ...state,
              weatherData
            }
          })
        }
        else { throw new Error(weatherData.message) }
      })
  }

  handleSearch = (city) => {
    this.setState(state => {
      return {
        ...state,
        currentCity: city
      }
    }, () => this.searchWeather())
  }

  render() {
    let { cityList, currentCity, weatherData } = this.state
    return (
      <Theme>
        <FlexColumn>
          <Search handleSearch={this.handleSearch} />
          <WeatherHome key={currentCity} currentCity={currentCity} weatherData={weatherData} />
        </FlexColumn>
      </Theme>
    );
  }
}
// {cityList.map(c => (
// ))}


export default App