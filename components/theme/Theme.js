import React from 'react'
import styled from 'styled-components'
import { StatusBar } from 'react-native'
import colors from './colors'
import CenterPage from './CenterPage'

const Theme = (props) => (
  <ThemeStyle>
    <StatusBar
      backgroundColor={colors().black}
      barStyle={'light-content'} />
    {props.children}
  </ThemeStyle>
)

const ThemeStyle = styled(CenterPage)`
  background-color: ${colors().gray};
`
export default Theme
