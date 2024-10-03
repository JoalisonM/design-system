import React, { forwardRef } from "react";
import { Check, ChevronDown } from "lucide-react";
import * as SelectPrimitive from "@radix-ui/react-select";
import type { ComponentPropsWithoutRef, ElementRef, ForwardRefExoticComponent, RefAttributes } from "react";

import {
  SelectItemContainer,
  SelectContentContainer,
  SelectTriggerContainer,
  ItemIndicatorContainer,
  SelectViewportContainer,
} from "./styles";

type SelectTriggerRef = ElementRef<typeof SelectPrimitive.Trigger>;
type SelectTriggerProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
  width?: number;
};

const SelectTrigger = forwardRef<SelectTriggerRef, SelectTriggerProps>(({ children, width = "100%", ...props }, ref) => {
  return (
    <SelectTriggerContainer
      ref={ref}
      style={{ width }}
      {...props}
    >
      {children}

      <SelectPrimitive.Icon asChild>
        <ChevronDown size={16} />
      </SelectPrimitive.Icon>
    </SelectTriggerContainer>
  );
});

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

type SelectContentRef = ElementRef<typeof SelectPrimitive.Content>;
type SelectContentProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Content>;

const SelectContent = forwardRef<SelectContentRef, SelectContentProps>(
  ({ children, position = "popper", ...props }, ref) => {
    return (
      <SelectPrimitive.Portal>
        <SelectContentContainer
          ref={ref}
          position={position}
          {...props}
        >
          <SelectViewportContainer position={position}>{children}</SelectViewportContainer>
        </SelectContentContainer>
      </SelectPrimitive.Portal>
    );
  }
);

SelectContent.displayName = SelectPrimitive.Content.displayName;

type OptionRef = ElementRef<typeof SelectPrimitive.Item>;
type OptionProps = SelectPrimitive.SelectItemProps

const Option = forwardRef<OptionRef, OptionProps>(({ children, ...props }, ref) => {
  return (
    <SelectItemContainer
      ref={ref}
      {...props}
    >
      <ItemIndicatorContainer>
        <SelectPrimitive.ItemIndicator>
          <Check strokeWidth={3} />
        </SelectPrimitive.ItemIndicator>
      </ItemIndicatorContainer>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectItemContainer>
  );
});

Option.displayName = "Option";

type SelectRef = ElementRef<typeof SelectPrimitive.Root>;
export type SelectProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
  width?: number;
  placeholder?: string;
};

type SelectComponent = ForwardRefExoticComponent<
  SelectProps & RefAttributes<SelectRef>
> & {
  Option: typeof Option;
};

export const Select = forwardRef<SelectRef, SelectProps>(({ children, placeholder, width, ...props }, ref) => {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectTrigger width={width}>
        <SelectPrimitive.Value placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent sideOffset={3}>
        {children}
      </SelectContent>
    </SelectPrimitive.Root>
  );
}) as SelectComponent;

Select.Option = Option;
Select.displayName = "Select";
