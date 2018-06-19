import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import logo from '../logo.svg'
import AppLogo from './AppLogo'

storiesOf('Logo', module).add('with image', () => (
  <AppLogo src={logo} alt="logo" />
))
