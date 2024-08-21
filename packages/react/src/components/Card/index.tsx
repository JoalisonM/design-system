import React, { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { ThemeProvider } from "styled-components";

import { CardContainer, CardHeaderContainer, CardFooterContainer, CardContentContainer } from "./style";

import { defaultTheme } from "../../styles/themes/default";

const Root = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ ...props }, ref) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CardContainer
        ref={ref}
        {...props}
      />
    </ThemeProvider>
  );
});
Root.displayName = "Root";

const Header = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ ...props }, ref) => (
  <CardHeaderContainer
    ref={ref}
    {...props}
  />
));
Header.displayName = "Header";

const Content = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ ...props }, ref) => (
  <CardContentContainer
    ref={ref}
    {...props}
  />
));
Content.displayName = "Content";

const Footer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ ...props }, ref) => (
  <CardFooterContainer
    ref={ref}
    {...props}
  />
));
Footer.displayName = "Footer";

export const Card = {
  Root,
  Header,
  Footer,
  Content,
};
