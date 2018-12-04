import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import Column from './Column'
import Row from './Row'
import Txt from './Txt'
import FlexColumn from './FlexColumn';

const Header = (props) => {
  return (
    <Container>
      <FlexColumn>
        <TouchableOpacity onPress={props.handleCancel}>
          <Txt size={12} weight={600}>{props.cancelText || 'CANCEL'}</Txt>
        </TouchableOpacity>
      </FlexColumn>
      <FlexColumn flex={3}>
        <Txt size={20} weight={800}>{props.text}</Txt>
      </FlexColumn>
      <FlexColumn>
        {props.handleForward &&
          <TouchableOpacity onPress={props.handleForward}>
            <Txt>{props.forwardText}</Txt>
          </TouchableOpacity>}
      </FlexColumn>
    </Container>
  )
}

const Container = styled(Row)`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const Col = styled(Column)`
  flex: ${ props => props.flex || 1};
  justify-content: center;
  align-items: center;
`

export default Header