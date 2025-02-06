import React, { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ElementRef, ReactElement } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { AvatarContainer, AvatarImage, AvatarFallback } from "./styles";

type AvatarRef = ElementRef<typeof AvatarPrimitive.Root>;
export type AvatarProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 12 | 16 | 20 | 40 | 64 | 80;
};

export const Root = forwardRef<AvatarRef, AvatarProps>((
  { size = 12, ...props }, ref
) => {
  return (
    <AvatarContainer
      ref={ref}
      size={size}
      {...props}
    />
  );
});

Root.displayName = AvatarPrimitive.Root.displayName;

type ImageRef = ElementRef<typeof AvatarPrimitive.Image>
type ImageProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>

const Image = React.forwardRef<ImageRef, ImageProps>(({ ...props }, ref) => {
  return (
    <AvatarImage ref={ref} {...props} />
  )
})

Image.displayName = AvatarPrimitive.Image.displayName;

type FallbackRef = ElementRef<typeof AvatarPrimitive.Fallback>
type FallbackProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>

const Fallback = React.forwardRef<FallbackRef, FallbackProps>((
{ ...props }, ref
) => {
  return (
    <AvatarFallback
      ref={ref}
      delayMs={600}
      {...props}
    />
  )
})
Fallback.displayName = AvatarPrimitive.Fallback.displayName;

export const Avatar = {
  Root,
  Image,
  Fallback,
}