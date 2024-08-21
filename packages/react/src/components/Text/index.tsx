import React, { forwardRef } from "react";
import { ThemeProvider } from "styled-components";
import type { ElementType, HTMLAttributes } from "react";

import { TextContainer } from "./styles";

import { defaultTheme } from "../../styles/themes/default";

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  as?: ElementType;
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
};

export const Text = forwardRef<HTMLParagraphElement, TextProps>(({ size = "md", as = "p", ...props }, ref) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TextContainer
        ref={ref}
        {...props}
        size={size}
        as={as}
      />
    </ThemeProvider>
  );
});

Text.displayName = "Text";
