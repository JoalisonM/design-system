import React, { forwardRef } from "react";
import { ThemeProvider } from "styled-components";
import type { ElementType, HTMLAttributes } from "react";

import { HeadingContainer } from "./styles";

import { defaultTheme } from "../../styles/themes/default";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
  as?: ElementType;
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ size = "md", as = "h2", ...props }, ref) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HeadingContainer
        {...props}
        ref={ref}
        size={size}
        as={as}
      />
    </ThemeProvider>
  );
});

Heading.displayName = "Heading";

export { Heading };
export type { HeadingProps };