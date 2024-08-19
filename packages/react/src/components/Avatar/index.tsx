import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles';
import { User } from 'lucide-react';
import { forwardRef, HTMLAttributes } from 'react';

export type AvatarProps = HTMLAttributes<HTMLImageElement>

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>((
  { ...props }, ref
) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AvatarContainer>
        <AvatarImage ref={ref} {...props} />

        <AvatarFallback delayMs={600}>
          <User />
        </AvatarFallback>
      </AvatarContainer>
    </ThemeProvider>
  )
});

Avatar.displayName = 'Avatar';