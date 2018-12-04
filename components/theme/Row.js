import React from 'react'
import styled from 'styled-components'

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
`
export default Row