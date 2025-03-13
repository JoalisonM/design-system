import { forwardRef } from "react";
import type { ElementType, HTMLAttributes } from "react";

import { BoxContainer } from "./styles";

export type BoxProps = HTMLAttributes<HTMLDivElement> & {
	as?: ElementType;
};

export const Box = forwardRef<HTMLDivElement, BoxProps>(
	({ as = "div", ...props }, ref) => {
		return <BoxContainer ref={ref} as={as} {...props} />;
	},
);

Box.displayName = "Box";
