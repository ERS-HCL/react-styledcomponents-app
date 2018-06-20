import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

import logo from './logo.svg'
import {
  AppContainer,
  AppHeader,
  AppLogo,
  AppTitle,
  AppIntro,
  Box,
  Button,
} from './components'

class App extends Component {
  state = {
    mode: 'light',
    size: 'normal',
  }

  handleToggleMode = () => {
    this.setState({ mode: this.state.mode === 'light' ? 'dark' : 'light' })
  }

  handleToggleSize = () => {
    this.setState({ size: this.state.size === 'normal' ? 'large' : 'normal' })
  }

  render() {
    return (
      <ThemeProvider theme={{ mode: this.state.mode, size: this.state.size }}>
        <AppContainer>
          <AppHeader>
            <AppLogo src={logo} alt="logo" />
            <AppTitle>Welcome to React</AppTitle>
          </AppHeader>
          <AppIntro>
            To get started, edit <code>src/App.js</code> and save to reload.
          </AppIntro>
          <Box>
            <AppTitle>styled-theming</AppTitle>
            <Button onClick={this.handleToggleMode}>Toggle Mode</Button>
            <Button kind="primary" onClick={this.handleToggleSize}>
              Toggle Size
            </Button>
            <Button kind="success" onClick={this.handleToggleMode}>
              Toggle Mode
            </Button>
            <Button kind="warning" onClick={this.handleToggleSize}>
              Toggle Size
            </Button>
            <Button kind="danger" onClick={this.handleToggleMode}>
              Toggle Mode
            </Button>
          </Box>
        </AppContainer>
      </ThemeProvider>
    )
  }
}

export default App
