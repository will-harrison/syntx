import React from 'react'
import { Dimensions, TextInput, KeyboardAvoidingView } from 'react-native'
import styled from 'styled-components'
import colors from './colors'
import Label from './Label'
import Column from './Column'

const Input = (props) => (
  <KeyboardAvoidingView behavior={'padding'}>
    <Container>
      <Label text={props.label} />
      <InputContainer {...props} />
    </Container>
  </KeyboardAvoidingView>
)

const Container = styled(Column)`
  border-style: solid;
  border-bottom-width: 1;
  border-bottom-color: ${colors(.75).white};
`

const InputContainer = styled.TextInput`
  width: ${Dimensions.get('window').width * 0.55};
  background-color: transparent;
  text-align: center;
  color: ${colors().white};
  padding-vertical: 5;
`

export default Input