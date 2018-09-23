import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import Auth from './scenes/Auth'
import Login from './scenes/Login'
import Dashboard from './scenes/Dashboard'
import Slideshow from './scenes/Slideshow'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVideo, faFolderOpen } from '@fortawesome/free-solid-svg-icons'

library.add(faVideo)
library.add(faFolderOpen)

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
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
    	margin: 0;
    	padding: 0;
    	border: 0;
    	font-size: 100%;
    	font: inherit;
    	vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
    	display: block;
    }
    body {
    	line-height: 1;
    }
    ol, ul {
    	list-style: none;
    }
    blockquote, q {
    	quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
    	content: '';
    	content: none;
    }
    table {
    	border-collapse: collapse;
    	border-spacing: 0;
    }
`

class App extends Component {
  render () {
    return (
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/slideshow' component={Slideshow} />
        <Route path='/auth' component={Auth} />
        <Route component={Login} />
      </Switch>
    )
  }
}

export default App
