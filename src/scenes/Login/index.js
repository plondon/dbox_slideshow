import React, { Component } from 'react'
import styled from 'styled-components'
import * as Dropbox from 'dropbox'

const dbx = new Dropbox.Dropbox({ clientId: 'koee38ql2uh6axd' })

const Wrapper = styled.div`
  * {
    color: white
  }
  text-align: center;
`

class Login extends Component {
  constructor (props) {
    super(props)
    const authUrl = dbx.getAuthenticationUrl(
      'http://localhost:3000/auth/'
    )
    this.state = {
      authUrl
    }
  }

  render () {
    const { authUrl } = this.state
    return (
      <Wrapper>
        <h1>Welcome to Dropbox Slideshow</h1>
        <a href={authUrl}>Click Here to Log In</a>
      </Wrapper>
    )
  }
}
export default Login
