import React, { forwardRef } from "react";
import { User } from "lucide-react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import type * as PrimitiveAvatar from "@radix-ui/react-avatar";

import { AvatarContainer, AvatarImage, AvatarFallback } from "./styles";

import { Text } from "../Text";

type AvatarRef = ElementRef<typeof PrimitiveAvatar.Root>;
export type AvatarProps = ComponentPropsWithoutRef<typeof PrimitiveAvatar.Root> & {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 12 | 16 | 20 | 40 | 64 | 80;
  fallback?: string;
  src?: string;
  alt?: string;
};

export const Avatar = forwardRef<AvatarRef, AvatarProps>((
  { fallback, src, alt, size = 12, ...props }, ref
) => {
  return (
    <AvatarContainer
      ref={ref}
      size={size}
      {...props}
    >
      <AvatarImage src={src} alt={alt} />

      <AvatarFallback size={size} delayMs={600}>
        {!fallback && (
          <User />
        )}

        {fallback && (
          <Text as="span">{fallback}</Text>
        )}
      </AvatarFallback>
    </AvatarContainer>
  );
});

Avatar.displayName = "Avatar";
