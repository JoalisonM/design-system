import React, { forwardRef, HTMLAttributes } from "react";

import { BadgeContainer } from "./style";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "../../styles/themes/default";

export type BadgeProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "secondary" | "outline" | "destructive" | "success" | "warning";
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>((
  { variant = "default", ...props }, ref
) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BadgeContainer ref={ref} variant={variant} {...props} />
    </ThemeProvider>
  );
});

Badge.displayName = "Badge";
