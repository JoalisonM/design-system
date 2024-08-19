import { ComponentProps, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { ThemeProvider } from 'styled-components';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { CheckboxRoot, CheckboxIndicator } from './styles';
import { defaultTheme } from '../../styles/themes/default';

export type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root>
type CheckboxRef = ElementRef<typeof CheckboxPrimitive.Root>
type CheckboxWithoutRef = ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>

export const Checkbox = forwardRef<CheckboxRef, CheckboxWithoutRef>((
  { ...props }, ref
) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CheckboxRoot ref={ref} {...props}>
        <CheckboxIndicator asChild>
          <Check strokeWidth={4} />
        </CheckboxIndicator>
      </CheckboxRoot>
    </ThemeProvider>
  )
})

Checkbox.displayName = 'Checkbox'