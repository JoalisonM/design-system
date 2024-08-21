import type { ElementType, HTMLAttributes } from "react";
import { forwardRef } from "react";
import { ThemeProvider } from "styled-components";

import { BoxContainer } from "./styles";

import { defaultTheme } from "../../styles/themes/default";

export type BoxProps = HTMLAttributes<HTMLDivElement> & {
  as?: ElementType;
};

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ as = "div", ...props }, ref) => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <BoxContainer ref={ref} as={as} {...props} />
      </ThemeProvider>
    );
  }
);

Box.displayName = "Box";
