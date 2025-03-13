import type * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { forwardRef } from "react";
import type {
	ComponentProps,
	ComponentPropsWithoutRef,
	ComponentRef,
} from "react";

import { CheckboxIndicator, CheckboxRoot } from "./styles";

export type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root>;
type CheckboxRef = ComponentRef<typeof CheckboxPrimitive.Root>;
type CheckboxWithoutRef = ComponentPropsWithoutRef<
	typeof CheckboxPrimitive.Root
>;

export const Checkbox = forwardRef<CheckboxRef, CheckboxWithoutRef>(
	({ ...props }, ref) => {
		return (
			<CheckboxRoot ref={ref} {...props}>
				<CheckboxIndicator asChild>
					<Check strokeWidth={4} />
				</CheckboxIndicator>
			</CheckboxRoot>
		);
	},
);

Checkbox.displayName = "Checkbox";
