import React from 'react'
import styled from 'styled-components'

const CenterPage = styled.View`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  flex: ${({ flex }) => flex || 1};
  justify-content: center;
  align-items: center;
`
export default CenterPage
