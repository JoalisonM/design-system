import type { HTMLAttributes } from "react";
import { forwardRef } from "react";
import { User } from "lucide-react";
import { ThemeProvider } from "styled-components";

import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";

import { defaultTheme } from "../../styles/themes/default";

export type AvatarProps = HTMLAttributes<HTMLImageElement>;

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ ...props }, ref) => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <AvatarContainer>
          <AvatarImage ref={ref} {...props} />

          <AvatarFallback delayMs={600}>
            <User />
          </AvatarFallback>
        </AvatarContainer>
      </ThemeProvider>
    );
  }
);

Avatar.displayName = "Avatar";
