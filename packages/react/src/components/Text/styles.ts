import styled from 'styled-components'
import { fontSizes } from '@atumalaca-ui/tokens'

type TextContainerProps = {
  size: keyof typeof fontSizes
}

export const TextContainer = styled.p<TextContainerProps>`
  font-family: ${(props) => props.theme.fonts.default};
  line-height: ${(props) => props.theme.lineHeights.base};
  margin: 0;
  color: ${(props) => props.theme.colors.zinc900};
  font-size: ${(props) => props.theme.fontSizes[props.size]};
  -webkit-font-smoothing: antialiased;
`
