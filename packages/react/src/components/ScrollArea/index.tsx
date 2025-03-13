import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ComponentRef } from "react";

import {
	ScrollAreaRoot,
	ScrollAreaScrollbar,
	ScrollAreaThumb,
	ScrollAreaViewport,
} from "./style";

type ScrollAreaRef = ComponentRef<typeof ScrollAreaPrimitive.Root>;
export type ScrollAreaProps = ComponentPropsWithoutRef<
	typeof ScrollAreaPrimitive.Root
> & {
	height?: number;
	width?: number;
};

export const ScrollArea = forwardRef<ScrollAreaRef, ScrollAreaProps>(
	(
		{ width, style, children, type = "scroll", height = 300, ...props },
		ref,
	) => {
		return (
			<ScrollAreaRoot
				ref={ref}
				type={type}
				style={{ height, width, ...style }}
				{...props}
			>
				<ScrollAreaViewport id="scrollableDiv">{children}</ScrollAreaViewport>

				<ScrollBar />
				<ScrollAreaPrimitive.Corner />
			</ScrollAreaRoot>
		);
	},
);

type ScrollBarRef = ComponentRef<
	typeof ScrollAreaPrimitive.ScrollAreaScrollbar
>;
type ScrollBarWithoutRefProps = ComponentPropsWithoutRef<
	typeof ScrollAreaPrimitive.ScrollAreaScrollbar
>;

const ScrollBar = forwardRef<ScrollBarRef, ScrollBarWithoutRefProps>(
	({ orientation = "vertical", ...props }, ref) => {
		return (
			<ScrollAreaScrollbar ref={ref} orientation={orientation} {...props}>
				<ScrollAreaThumb />
			</ScrollAreaScrollbar>
		);
	},
);

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
