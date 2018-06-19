import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import logo from '../logo.svg'
import AppContainer from './AppContainer'
import AppHeader from './AppHeader'
import AppLogo from './AppLogo'
import AppTitle from './AppTitle'

storiesOf('App Header', module)
  .add('composite', () => (
    <AppHeader>
      <AppLogo src={logo} alt="logo" />
      <AppTitle>Welcome to React</AppTitle>
    </AppHeader>
  ))
  .add('with container', () => (
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <AppTitle>Welcome to React</AppTitle>
      </AppHeader>
    </AppContainer>
  ))
