import React, { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";

import { InputContainer, Prefix, Suffix, Trigger } from "./styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  prefix?: ReactNode;
  suffix?: ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({ prefix, suffix, ...props }, ref) => {
  return (
    <InputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Trigger
        ref={ref}
        {...props}
      />
      {!!suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  );
});

Input.displayName = "Input";
