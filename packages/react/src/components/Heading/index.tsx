import React, { forwardRef } from "react";
import type { ElementType, HTMLAttributes } from "react";

import { HeadingContainer } from "./styles";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
  as?: ElementType;
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ size = "md", as = "h2", ...props }, ref) => {
  return (
    <HeadingContainer
      {...props}
      ref={ref}
      size={size}
      as={as}
    />
  );
});

Heading.displayName = "Heading";

export { Heading };
export type { HeadingProps };
