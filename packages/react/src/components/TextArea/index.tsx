import type { TextareaHTMLAttributes } from "react";
import { forwardRef } from "react";
import { ThemeProvider } from "styled-components";

import { TextAreaContainer } from "./styles";

import { defaultTheme } from "../../styles/themes/default";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ ...props }, ref) => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <TextAreaContainer ref={ref} {...props} />
      </ThemeProvider>
    );
  }
);

TextArea.displayName = "TextArea";
