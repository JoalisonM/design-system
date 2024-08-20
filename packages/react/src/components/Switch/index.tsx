import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { ThemeProvider } from 'styled-components'
import * as SwitchPrimitives from '@radix-ui/react-switch'

import { defaultTheme } from '../../styles/themes/default'
import { SwitchRoot, SwitchThumb } from './styles'

type SwitchPropsRef = ElementRef<typeof SwitchPrimitives.Root>
export type SwitchProps = ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>

export const Switch = forwardRef<SwitchPropsRef, SwitchProps>((
  { ...props }, ref
) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SwitchRoot ref={ref} {...props}>
        <SwitchThumb />
      </SwitchRoot>
    </ThemeProvider>
  )
})