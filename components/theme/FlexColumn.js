import React from 'react'
import styled from 'styled-components'

const Column = styled.View`
  display: flex;
  flex-direction: column;
  flex: ${props => props.flex || 1};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
`
export default Column
