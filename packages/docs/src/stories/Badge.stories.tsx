import { Badge, type BadgeProps, Box } from "@nefex-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Data Display/Badge",
	component: Badge,
	args: {
		children: "Lorem ipsum",
	},
	decorators: [
		(Story) => {
			return <Box>{Story()}</Box>;
		},
	],
} as Meta<BadgeProps>;

export const Primary: StoryObj<BadgeProps> = {};

export const Secondary: StoryObj<BadgeProps> = {
	args: {
		variant: "secondary",
		children: "Secondary",
	},
};

export const Outline: StoryObj<BadgeProps> = {
	args: {
		variant: "outline",
		children: "Outline",
	},
};

export const Destructive: StoryObj<BadgeProps> = {
	args: {
		variant: "destructive",
		children: "Destructive",
	},
};

export const Success: StoryObj<BadgeProps> = {
	args: {
		variant: "success",
		children: "Success",
	},
};

export const Warning: StoryObj<BadgeProps> = {
	args: {
		variant: "warning",
		children: "Warning",
	},
};
