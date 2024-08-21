import React, { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { ThemeProvider } from "styled-components";

import { ButtonContainer } from "./styles";

import { defaultTheme } from "../../styles/themes/default";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "success" | "outline" | "ghost" | "link";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", ...props }, ref) => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <ButtonContainer
          ref={ref}
          {...props}
          variant={variant}
          size={size}
        />
      </ThemeProvider>
    );
  }
);

Button.displayName = "Button";
