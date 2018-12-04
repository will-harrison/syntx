import React from 'react'
import { Dimensions } from 'react-native'
import colors from './colors'
import Column from './Column'
import styled from 'styled-components'

const BlankContainer = (props) => (
  <Container>
    {props.children}
  </Container>
)

const Container = styled(Column)`
  justify-content: space-evenly;
  align-items: center;  
  background-color: ${colors(.85).black};
  border: 1px solid ${colors().white};
  border-radius: 4;
  flex: ${props => props.flex || .9};
  padding-horizontal: 5;
  padding-vertical: 5;
  height: ${Dimensions.get('window').height * .9};
  width: ${Dimensions.get('window').width * .95};
  margin-top: 10;
`
export default BlankContainer