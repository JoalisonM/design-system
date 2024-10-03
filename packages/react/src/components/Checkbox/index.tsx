import React, { forwardRef } from "react";
import { Check } from "lucide-react";
import type * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import type { ComponentProps, ElementRef, ComponentPropsWithoutRef } from "react";

import { CheckboxRoot, CheckboxIndicator } from "./styles";

export type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root>;
type CheckboxRef = ElementRef<typeof CheckboxPrimitive.Root>;
type CheckboxWithoutRef = ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

export const Checkbox = forwardRef<CheckboxRef, CheckboxWithoutRef>(({ ...props }, ref) => {
  return (
    <CheckboxRoot
      ref={ref}
      {...props}
    >
      <CheckboxIndicator asChild>
        <Check strokeWidth={4} />
      </CheckboxIndicator>
    </CheckboxRoot>
  );
});

Checkbox.displayName = "Checkbox";
