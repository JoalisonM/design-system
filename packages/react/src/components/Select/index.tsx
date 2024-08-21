import { Check, ChevronDown } from "lucide-react";
import * as SelectPrimitive from "@radix-ui/react-select";
import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
} from "react";
import { forwardRef } from "react";
import { ThemeProvider } from "styled-components";

import {
  SelectItemContainer,
  SelectContentContainer,
  SelectTriggerContainer,
  SelectViewportContainer,
} from "./styles";

import { defaultTheme } from "../../styles/themes/default";

type SelectTriggerRef = ElementRef<typeof SelectPrimitive.Trigger>;
type SelectTriggerProps = ComponentPropsWithoutRef<
  typeof SelectPrimitive.Trigger
>;

const SelectTrigger = forwardRef<SelectTriggerRef, SelectTriggerProps>(
  ({ children, ...props }, ref) => {
    return (
      <SelectTriggerContainer ref={ref} {...props}>
        {children}

        <SelectPrimitive.Icon asChild>
          <ChevronDown size={16} />
        </SelectPrimitive.Icon>
      </SelectTriggerContainer>
    );
  }
);

SelectTrigger.displayName = "SelectTrigger";

type SelectContentRef = ElementRef<typeof SelectPrimitive.Content>;
type SelectContentProps = ComponentPropsWithoutRef<
  typeof SelectPrimitive.Content
>;

const SelectContent = forwardRef<SelectContentRef, SelectContentProps>(
  ({ children, position = "popper", ...props }, ref) => {
    return (
      <SelectPrimitive.Portal>
        <SelectContentContainer ref={ref} position={position} {...props}>
          <SelectViewportContainer position={position}>
            {children}
          </SelectViewportContainer>
        </SelectContentContainer>
      </SelectPrimitive.Portal>
    );
  }
);

SelectContent.displayName = "SelectContent";

type OptionRef = ElementRef<typeof SelectPrimitive.Item>;
type OptionProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;

export const Option = forwardRef<OptionRef, OptionProps>(
  ({ children, ...props }, ref) => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <SelectItemContainer ref={ref} {...props}>
          <SelectPrimitive.ItemIndicator>
            <Check strokeWidth={3} className="h-4 w-4 text-blueLagoon" />
          </SelectPrimitive.ItemIndicator>

          <SelectPrimitive.ItemText className="text-black">
            {children}
          </SelectPrimitive.ItemText>
        </SelectItemContainer>
      </ThemeProvider>
    );
  }
);

Option.displayName = "Option";

export type SelectProps = ComponentProps<typeof SelectPrimitive.Trigger> & {
  placeholder?: string;
};

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  ({ children, placeholder, ...props }, ref) => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <SelectPrimitive.Root>
          <SelectTrigger ref={ref} {...props}>
            <SelectPrimitive.Value placeholder={placeholder} />
          </SelectTrigger>

          <SelectContent sideOffset={3}>{children}</SelectContent>
        </SelectPrimitive.Root>
      </ThemeProvider>
    );
  }
);

Select.displayName = "Select";
