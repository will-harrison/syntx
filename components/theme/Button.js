import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'
import Column from './Column'
import colors from './colors'
import Txt from './Txt'

const Button = (props) => (
  <ButtonContainer {...props}>
    <TouchableOpacity onPress={props.onPress}>
      <ButtonText size={16}>
        {props.text.toUpperCase() || ''}
      </ButtonText>
    </TouchableOpacity>
  </ButtonContainer>
)

const ButtonText = styled(Txt)`
  color: ${colors(.65).white};
  font-weight: 600;
  padding-vertical: 5;
  padding-horizontal: 15;
`

const ButtonContainer = styled(View)`
  border: ${props => props.border !== false ? '1px solid ' + colors(.5).white : '1px solid ' + colors(0).white};
  border-radius: 4;
  justify-content: center;
  align-items: center;
  width: ${props => props.width || '100%'}
`

export default Button
