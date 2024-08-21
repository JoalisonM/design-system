import { ThemeProvider } from "styled-components";
import type { fontSizes } from "@nefex-ui/tokens";
import type { ElementType, HTMLAttributes } from "react";
import { forwardRef } from "react";

import { HeadingContainer } from "./styles";

import { defaultTheme } from "../../styles/themes/default";

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  size?: keyof typeof fontSizes;
  as?: ElementType;
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ size = "md", as = "h2", ...props }, ref) => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <HeadingContainer {...props} ref={ref} size={size} as={as} />
      </ThemeProvider>
    );
  }
);

Heading.displayName = "Heading";
