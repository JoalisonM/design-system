import React, { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { InputContainer, Prefix, Suffix, Trigger } from "./styles";

import { defaultTheme } from "../../styles/themes/default";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  prefix?: ReactNode;
  suffix?: ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({ prefix, suffix, ...props }, ref) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <InputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Trigger
          ref={ref}
          {...props}
        />
        {!!suffix && <Suffix>{suffix}</Suffix>}
      </InputContainer>
    </ThemeProvider>
  );
});

Input.displayName = "Input";
