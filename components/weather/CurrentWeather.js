import React, { Component } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components'
import { Column, Row, Txt } from '../theme'

class CurrentWeather extends Component {
  iconURL = (icon) => `http://openweathermap.org/img/w/${icon}.png`

  render() {
    let { currentCity, weatherData } = this.props
    console.log(weatherData)
    return (
      <Column>
        {weatherData && weatherData.weather ?
          <Row>
            <Txt>{currentCity}</Txt>
            <Img source={{ uri: this.iconURL(weatherData.weather[0].icon) }} />
            <Column>
              <Txt>{weatherData.main.temp}&deg;</Txt>
              <Txt>{weatherData.weather[0].main}</Txt>
            </Column>
          </Row>
          :
          <Txt>Loading</Txt>
        }
      </Column>
    )
  }
}

const Img = styled(Image)`
  height: 100;
  width: 100;
`

// <WeatherIcon name='own' iconId={currentCity.weather[0].id} />
export default CurrentWeather