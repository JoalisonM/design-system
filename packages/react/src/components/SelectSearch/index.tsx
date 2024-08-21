import React, { forwardRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Check, ChevronDown, Search } from "lucide-react";
import * as SelectPrimitive from "@radix-ui/react-select";
import type { ComponentPropsWithoutRef, ElementRef } from "react";

import {
  Input,
  SelectItemContainer,
  SelectContentContainer,
  SelectTriggerContainer,
  SelectViewportContainer,
} from "./styles";

import { defaultTheme } from "../../styles/themes/default";

type SelectTriggerRef = ElementRef<typeof SelectPrimitive.Trigger>;
type SelectTriggerProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
  open?: boolean;
};

const SelectTrigger = forwardRef<SelectTriggerRef, SelectTriggerProps>(({ children, open = false, ...props }, ref) => {
  return (
    <SelectTriggerContainer
      ref={ref}
      {...props}
    >
      {children}

      <SelectPrimitive.Icon asChild>{open ? <Search size={14} /> : <ChevronDown size={16} />}</SelectPrimitive.Icon>
    </SelectTriggerContainer>
  );
});

SelectTrigger.displayName = "SelectTrigger";

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

SelectContent.displayName = "SelectContent";

type OptionRef = ElementRef<typeof SelectPrimitive.Item>;
type OptionProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;

export const SearchOption = forwardRef<OptionRef, OptionProps>(({ children, ...props }, ref) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SelectItemContainer
        ref={ref}
        {...props}
      >
        <SelectPrimitive.ItemIndicator>
          <Check
            strokeWidth={3}
            className="h-4 w-4 text-blueLagoon"
          />
        </SelectPrimitive.ItemIndicator>

        <SelectPrimitive.ItemText className="text-black">{children}</SelectPrimitive.ItemText>
      </SelectItemContainer>
    </ThemeProvider>
  );
});

SearchOption.displayName = "SearchOption";

type SelectSearchRef = ElementRef<typeof SelectPrimitive.Root>;
export type SelectSearchProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
  onSearch: (value: string) => void;
  placeholder?: string;
};

export const SelectSearch = forwardRef<SelectSearchRef, SelectSearchProps>(
  ({ children, onSearch, placeholder, ...props }, ref) => {
    const [open, setOpen] = useState(false);

    const handleToggleOpen = (open: boolean) => {
      setOpen(open);
    };

    const handleSearch = async (search: string) => {
      await onSearch(search);
      if (search.length > 0) {
        setOpen(true);
      }
    };

    return (
      <ThemeProvider theme={defaultTheme}>
        <SelectPrimitive.Root
          ref={ref}
          open={open}
          onOpenChange={handleToggleOpen}
          {...props}
        >
          <SelectTrigger open={open}>
            <Input
              placeholder={placeholder}
              onChange={(event) => handleSearch(event.target.value)}
            />
          </SelectTrigger>

          <SelectContent sideOffset={3}>{children}</SelectContent>
        </SelectPrimitive.Root>
      </ThemeProvider>
    );
  }
);

SelectSearch.displayName = "SelectSearch";
