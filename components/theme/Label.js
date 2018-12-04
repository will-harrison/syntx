import React from 'react'
import styled from 'styled-components'
import Txt from './Txt'

const Label = (props) => (
  <LabelText align={'left'}>
    {props.text}
  </LabelText>
)

const LabelText = styled(Txt)`
  font-size: 14;
  margin-left: ${props => props.left || 0};
  margin-bottom: -20;
`
export default Label