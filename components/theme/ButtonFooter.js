import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import Button from './Button'
import Column from './Column'
import Row from './Row'
import colors from './colors';
import Txt from './Txt'
import FlexColumn from './FlexColumn';

const ButtonFooter = (props) => (
  <Container>
    <NeedHelp>
      {props.handleHelp &&
        <TouchableOpacity onPress={props.handleHelp}>
          <Txt size={12}>{props.helpText || ''}</Txt>
        </TouchableOpacity>
      }
    </NeedHelp>
    <FlexColumn flex={2}>
      {props.text && <Txt size={16} weight={'600'} width={50} color={props.color || colors().white}>{props.text || ''}</Txt>}
    </FlexColumn>
    <ButtonRow>
      {props.handleCancelPress &&
        <Column>
          <CancelButton text={props.cancelText || 'Cancel'} onPress={props.handleCancelPress} />}
    </Column>}
      <Column>
        {props.handleButtonPress &&
          <Button text={props.buttonText || 'Submit'} onPress={props.handleButtonPress} />}
      </Column>
    </ButtonRow>
  </Container>
)

const Container = styled(Row)`
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`

const NeedHelp = styled(FlexColumn)`
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 5;
`

const ButtonRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
`

const CancelButton = styled(Button)`
  margin-horizontal: 5;
`

export default ButtonFooter