import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components'
import colors from './colors'

const Txt = styled.Text`
  color: ${props => props.color || colors().white};
  font-size: ${props => props.size || 20};
  font-weight: ${props => props.weight || 400};
  text-align: ${props => props.align || 'center'};
  max-width: ${props => Dimensions.get('window').width * (props.width / 100 || 1)};
  margin-vertical: ${props => props.vert || 0};
`
export default Txt
