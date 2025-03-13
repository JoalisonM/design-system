import type * as SwitchPrimitives from "@radix-ui/react-switch";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ComponentRef } from "react";

import { SwitchRoot, SwitchThumb } from "./styles";

type SwitchPropsRef = ComponentRef<typeof SwitchPrimitives.Root>;
export type SwitchProps = ComponentPropsWithoutRef<
	typeof SwitchPrimitives.Root
>;

export const Switch = forwardRef<SwitchPropsRef, SwitchProps>(
	({ ...props }, ref) => {
		return (
			<SwitchRoot ref={ref} {...props}>
				<SwitchThumb />
			</SwitchRoot>
		);
	},
);
