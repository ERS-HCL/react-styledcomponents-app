import React, { Component } from 'react'
import logo from './logo.svg'
import {
  AppContainer,
  AppHeader,
  AppLogo,
  AppTitle,
  AppIntro,
} from './components'

class App extends Component {
  render() {
    return (
      <AppContainer>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
      </AppContainer>
    )
  }
}

export default App
