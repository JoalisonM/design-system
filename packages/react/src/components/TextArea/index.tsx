import { forwardRef, TextareaHTMLAttributes } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../styles/themes/default';
import { TextAreaContainer } from './styles';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((
  { ...props }, ref
) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TextAreaContainer ref={ref} {...props} />
    </ThemeProvider>
  )
})

TextArea.displayName = 'TextArea'