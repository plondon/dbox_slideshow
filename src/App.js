import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled, { injectGlobal } from 'styled-components'
import Auth from './scenes/Auth'
import Login from './scenes/Login'
import Dashboard from './scenes/Dashboard'
import Slideshow from './scenes/Slideshow'

injectGlobal`
  html,
  body,
  #root {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: 'Open Sans', sans-serif;
  }

  .slick-slider {
    text-align: center;
  }
  .slick-slide img {
    height: 100vh;
    width: auto !important;
  }
`

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`

class App extends Component {
  render () {
    return (
      <Wrapper>
        <Switch>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/slideshow' component={Slideshow} />
          <Route path='/auth' component={Auth} />
          <Route component={Login} />
        </Switch>
      </Wrapper>
    )
  }
}

export default App
