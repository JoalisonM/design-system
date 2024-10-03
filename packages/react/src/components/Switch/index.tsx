import React, { forwardRef } from "react";
import type * as SwitchPrimitives from "@radix-ui/react-switch";
import type { ComponentPropsWithoutRef, ElementRef } from "react";

import { SwitchRoot, SwitchThumb } from "./styles";

type SwitchPropsRef = ElementRef<typeof SwitchPrimitives.Root>;
export type SwitchProps = ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>;

export const Switch = forwardRef<SwitchPropsRef, SwitchProps>(({ ...props }, ref) => {
  return (
    <SwitchRoot
      ref={ref}
      {...props}
    >
      <SwitchThumb />
    </SwitchRoot>
  );
});
