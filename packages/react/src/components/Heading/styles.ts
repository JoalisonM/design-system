import styled from 'styled-components'
import { fontSizes } from '@nefex-ui/tokens'

type HeadingContainerProps = {
  size: keyof typeof fontSizes
}

export const HeadingContainer = styled.h2<HeadingContainerProps>`
  font-family: ${(props) => props.theme.fonts.default};
  line-height: ${(props) => props.theme.lineHeights.base};
  margin: 0;
  color: ${(props) => props.theme.colors.zinc900};
  font-size: ${(props) => props.theme.fontSizes[props.size]};
  -webkit-font-smoothing: antialiased;
`
