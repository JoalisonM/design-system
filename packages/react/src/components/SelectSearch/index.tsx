import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, Search } from "lucide-react";
import { forwardRef, useState } from "react";
import type { ComponentPropsWithoutRef, ComponentRef } from "react";

import {
	Input,
	SelectContentContainer,
	SelectItemContainer,
	SelectTriggerContainer,
	SelectViewportContainer,
} from "./styles";

type SelectTriggerRef = ComponentRef<typeof SelectPrimitive.Trigger>;
type SelectTriggerProps = ComponentPropsWithoutRef<
	typeof SelectPrimitive.Trigger
> & {
	open?: boolean;
};

const SelectTrigger = forwardRef<SelectTriggerRef, SelectTriggerProps>(
	({ children, open = false, ...props }, ref) => {
		return (
			<SelectTriggerContainer ref={ref} {...props}>
				{children}

				<SelectPrimitive.Icon asChild>
					{open ? <Search size={14} /> : <ChevronDown size={16} />}
				</SelectPrimitive.Icon>
			</SelectTriggerContainer>
		);
	},
);

SelectTrigger.displayName = "SelectTrigger";

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
	},
);

SelectContent.displayName = "SelectContent";

type OptionRef = ComponentRef<typeof SelectPrimitive.Item>;
type OptionProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Item>;

export const SearchOption = forwardRef<OptionRef, OptionProps>(
	({ children, ...props }, ref) => {
		return (
			<SelectItemContainer ref={ref} {...props}>
				<SelectPrimitive.ItemIndicator>
					<Check strokeWidth={3} className="h-4 w-4 text-blueLagoon" />
				</SelectPrimitive.ItemIndicator>

				<SelectPrimitive.ItemText className="text-black">
					{children}
				</SelectPrimitive.ItemText>
			</SelectItemContainer>
		);
	},
);

SearchOption.displayName = "SearchOption";

type SelectSearchRef = ComponentRef<typeof SelectPrimitive.Root>;
export type SelectSearchProps = ComponentPropsWithoutRef<
	typeof SelectPrimitive.Root
> & {
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
		);
	},
);

SelectSearch.displayName = "SelectSearch";
