import { ElementType, forwardRef, HTMLAttributes } from 'react'
import { ThemeProvider } from 'styled-components'
import { fontSizes } from '@nefex-ui/tokens'

import { defaultTheme } from '../../styles/themes/default'
import { TextContainer } from './styles'

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  as?: ElementType
  size?: keyof typeof fontSizes
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>((
  { size = 'md', as = 'p', ...props }, ref
) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TextContainer ref={ref} {...props} size={size} as={as} />
    </ThemeProvider>
  )
})

Text.displayName = 'Text'