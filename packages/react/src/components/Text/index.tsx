import type { ElementType, HTMLAttributes } from "react";
import { forwardRef } from "react";
import { ThemeProvider } from "styled-components";
import type { fontSizes } from "@nefex-ui/tokens";

import { TextContainer } from "./styles";

import { defaultTheme } from "../../styles/themes/default";

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  as?: ElementType;
  size?: keyof typeof fontSizes;
};

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ size = "md", as = "p", ...props }, ref) => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <TextContainer ref={ref} {...props} size={size} as={as} />
      </ThemeProvider>
    );
  }
);

Text.displayName = "Text";
