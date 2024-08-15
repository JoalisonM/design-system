import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ThemeProvider } from 'styled-components'

import { ButtonContainer } from './styles'
import { defaultTheme } from '../../styles/themes/default'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'default' | 'sm' | 'lg' | 'icon'
  variant?: 'default' | 'destructive' | 'success' | 'outline' | 'ghost' | 'link'
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'default', size = 'default', asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : ButtonContainer

    return (
      <ThemeProvider theme={defaultTheme}>
        <Comp ref={ref} {...props} variant={variant} size={size} />
      </ThemeProvider>
    )
  },
)

Button.displayName = 'Button'

export { Button }
