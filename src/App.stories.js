import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import App from '../src/App'

storiesOf('Main App', module).add('with text', () => <App />)
