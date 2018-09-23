import React, { Component } from 'react'
import styled from 'styled-components'
import * as Dropbox from 'dropbox'
import { Title } from '../../components'

const dbx = new Dropbox.Dropbox({ clientId: 'koee38ql2uh6axd' })

const Wrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`

class Login extends Component {
  constructor (props) {
    super(props)
    const accessToken = localStorage.getItem('access_token')
    const authUrl = dbx.getAuthenticationUrl(
      'http://localhost:3000/auth/'
    )
    this.state = {
      authUrl
    }
    if (accessToken) {
      props.history.push({
        pathname: '/dashboard',
        state: { accessToken }
      })
    }
  }

  render () {
    const { authUrl } = this.state
    return (
      <Wrapper>
        <Title>Welcome to Dropbox Slideshow</Title>
        <a href={authUrl}>Click Here to Log In</a>
      </Wrapper>
    )
  }
}
export default Login
