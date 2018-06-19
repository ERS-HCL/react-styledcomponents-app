import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import logo from '../logo.svg'
import AppIntro from './AppIntro'

storiesOf('Intro', module).add('intro text', () => (
  <AppIntro>
    To get started, edit <code>src/App.js</code> and save to reload.
  </AppIntro>
))
