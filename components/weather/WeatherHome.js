import React, { Component } from 'react'
import { Column, Txt } from '../theme'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'

class WeatherHome extends Component {
  render() {
    let { cityList, currentCity, weatherData } = this.props
    return (
      <Column>
        <Column flex={1}>
          <Forecast cityList={cityList} weatherData={weatherData} />
        </Column>
        <Column flex={2}>
          <CurrentWeather currentCity={currentCity} weatherData={weatherData} />
        </Column>
      </Column>
    )
  }
}

export default WeatherHome