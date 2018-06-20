import theme from 'styled-theming'
import styled from 'styled-components'
import colors from './Colors'

const fontSize = theme('size', {
  normal: '1em',
  large: '1.2em',
})

const boxBackgroundColor = theme('mode', {
  light: colors.white,
  dark: colors.grayDarker,
})

const boxColor = theme('mode', {
  light: colors.grayDarker,
  dark: colors.grayLighter,
})

const Box = styled.div`
  text-align: center;
  padding: 4em;
  font-size: ${fontSize};
  background-color: ${boxBackgroundColor};
  color: ${boxColor};
`

export default Box
