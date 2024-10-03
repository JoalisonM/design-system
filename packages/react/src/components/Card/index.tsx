import React, { forwardRef } from "react";
import type { HTMLAttributes } from "react";

import { CardContainer, CardHeaderContainer, CardFooterContainer, CardContentContainer } from "./style";

const Root = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ ...props }, ref) => {
  return (
    <CardContainer
      ref={ref}
      {...props}
    />
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
