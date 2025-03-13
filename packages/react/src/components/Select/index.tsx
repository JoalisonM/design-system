import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { forwardRef } from "react";
import type {
  ComponentPropsWithoutRef,
  ComponentRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";

import {
  ItemIndicatorContainer,
  SelectContentContainer,
  SelectItemContainer,
  SelectTriggerContainer,
  SelectViewportContainer,
} from "./styles";

type SelectTriggerRef = ComponentRef<typeof SelectPrimitive.Trigger>;
type SelectTriggerProps = ComponentPropsWithoutRef<
  typeof SelectPrimitive.Trigger
> & {
  width?: number;
};

const SelectTrigger = forwardRef<SelectTriggerRef, SelectTriggerProps>(
  ({ children, width = "100%", ...props }, ref) => {
    return (
      <SelectTriggerContainer ref={ref} style={{ width }} {...props}>
        {children}

        <SelectPrimitive.Icon asChild>
          <ChevronDown size={16} />
        </SelectPrimitive.Icon>
      </SelectTriggerContainer>
    );
  }
);

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

type SelectContentRef = ComponentRef<typeof SelectPrimitive.Content>;
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

SelectContent.displayName = SelectPrimitive.Content.displayName;

type OptionRef = ComponentRef<typeof SelectPrimitive.Item>;
type OptionProps = SelectPrimitive.SelectItemProps;

const Option = forwardRef<OptionRef, OptionProps>(
  ({ children, ...props }, ref) => {
    return (
      <SelectItemContainer ref={ref} {...props}>
        <ItemIndicatorContainer>
          <SelectPrimitive.ItemIndicator>
            <Check strokeWidth={3} />
          </SelectPrimitive.ItemIndicator>
        </ItemIndicatorContainer>

        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectItemContainer>
    );
  }
);

Option.displayName = "Option";

type SelectRef = ComponentRef<typeof SelectPrimitive.Root>;
export type SelectProps = ComponentPropsWithoutRef<
  typeof SelectPrimitive.Root
> & {
  width?: number;
  placeholder?: string;
};

type SelectComponent = ForwardRefExoticComponent<
  SelectProps & RefAttributes<SelectRef>
> & {
  Option: typeof Option;
};

export const Select = forwardRef<SelectRef, SelectProps>(
  ({ children, placeholder, width, ...props }) => {
    return (
      <SelectPrimitive.Root {...props}>
        <SelectTrigger width={width}>
          <SelectPrimitive.Value placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent sideOffset={3}>{children}</SelectContent>
      </SelectPrimitive.Root>
    );
  }
) as SelectComponent;

Select.Option = Option;
Select.displayName = "Select";
