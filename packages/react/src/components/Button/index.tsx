import React, { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { ThemeProvider } from "styled-components";

import { ButtonContainer } from "./styles";

import { defaultTheme } from "../../styles/themes/default";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "success" | "outline" | "ghost" | "link";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, variant = "default", size = "default", ...props }, ref) => {
    const Comp = asChild ? Slot : ButtonContainer;

    return (
      <ThemeProvider theme={defaultTheme}>
        <Comp
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
