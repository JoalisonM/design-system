import React, { forwardRef } from "react";
import { User } from "lucide-react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import type * as PrimitiveAvatar from "@radix-ui/react-avatar";

import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";

type AvatarRef = ElementRef<typeof PrimitiveAvatar.Image>;
export type AvatarProps = ComponentPropsWithoutRef<typeof PrimitiveAvatar.Image> & {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 12 | 16 | 20 | 40 | 64 | 80;
};

export const Avatar = forwardRef<AvatarRef, AvatarProps>(({ size = 12, ...props }, ref) => {
  return (
    <AvatarContainer size={size}>
      <AvatarImage
        ref={ref}
        {...props}
      />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  );
});

Avatar.displayName = "Avatar";
