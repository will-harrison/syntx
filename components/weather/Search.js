import React, { Component } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { colors, Button, Column, Input, Txt } from '../theme'
import styled from 'styled-components'

class Search extends Component {
  state = {
    searchTerm: ''
  };

  handleChange = (e) => {
    e.persist()
    this.setState(state => {
      return {
        state,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.handleSearch(this.state.searchTerm)
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding'>
        <FormWrapper>
          <Input
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}
            placeholder="Seattle"
            onChange={this.handleChange} />
          <Button onPress={this.handleSubmit} text={'Search'} />
        </FormWrapper>
      </KeyboardAvoidingView>
    )
  }
}

const FormWrapper = styled(Column)`
      margin-top: 15px;
    `

// const Input = styled(Input)`
//   font-size: 1.5em;
//   text-align: center;
//   background-color: ${colors().blue};
// `

export default Search
