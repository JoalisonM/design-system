import React, { ElementRef, forwardRef, ComponentPropsWithoutRef } from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import {
  ScrollAreaRoot,
  ScrollAreaThumb,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
} from "./style";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "../../styles/themes/default";

type ScrollAreaRef = ElementRef<typeof ScrollAreaPrimitive.Root>
export type ScrollAreaProps =
  ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    height?: number;
    width?: number;
  }

export const ScrollArea = forwardRef<ScrollAreaRef, ScrollAreaProps>((
  { width, style, children, height = 300, ...props }, ref
) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ScrollAreaRoot
        ref={ref}
        style={{ height, width, ...style }}
        {...props}
      >
        <ScrollAreaViewport>
          {children}
        </ScrollAreaViewport>

        <ScrollBar />
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaRoot>
    </ThemeProvider>
  );
});

type ScrollBarRef = ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
type ScrollBarWithoutRefProps =
  ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>

const ScrollBar = forwardRef<ScrollBarRef, ScrollBarWithoutRefProps>((
  { orientation = "vertical", ...props }, ref
) => {
  return (
    <ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      {...props}
    >
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
  );
});

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;