import React, { forwardRef } from "react";
import { User } from "lucide-react";
import { ThemeProvider } from "styled-components";
import type { ComponentPropsWithRef, ElementRef } from "react";
import type * as PrimitiveAvatar from "@radix-ui/react-avatar";

import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";

import { defaultTheme } from "../../styles/themes/default";

type AvatarRef = ElementRef<typeof PrimitiveAvatar.Image>;
export type AvatarProps = ComponentPropsWithRef<typeof PrimitiveAvatar.Image> & {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 12 | 16 | 20 | 40 | 64 | 80;
};

export const Avatar = forwardRef<AvatarRef, AvatarProps>(({ size = 12, ...props }, ref) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AvatarContainer size={size}>
        <AvatarImage
          ref={ref}
          {...props}
        />

        <AvatarFallback delayMs={600}>
          <User />
        </AvatarFallback>
      </AvatarContainer>
    </ThemeProvider>
  );
});

Avatar.displayName = "Avatar";
