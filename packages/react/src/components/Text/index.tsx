import React, { forwardRef } from "react";
import type { ElementType, HTMLAttributes } from "react";

import { TextContainer } from "./styles";

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  as?: ElementType;
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
};

export const Text = forwardRef<HTMLParagraphElement, TextProps>(({ size = "md", as = "p", ...props }, ref) => {
  return (
    <TextContainer
      ref={ref}
      {...props}
      size={size}
      as={as}
    />
  );
});

Text.displayName = "Text";
