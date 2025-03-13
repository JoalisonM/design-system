import { type HTMLAttributes, forwardRef } from "react";

import { BadgeContainer } from "./style";

export type BadgeProps = HTMLAttributes<HTMLDivElement> & {
	variant?:
		| "default"
		| "secondary"
		| "outline"
		| "destructive"
		| "success"
		| "warning";
};

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
	({ variant = "default", ...props }, ref) => {
		return <BadgeContainer ref={ref} variant={variant} {...props} />;
	},
);

Badge.displayName = "Badge";
