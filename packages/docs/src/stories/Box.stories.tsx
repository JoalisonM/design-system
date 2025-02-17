import { Box, type BoxProps } from "@nefex-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Surfaces/Box",
	component: Box,
	args: {
		children: "Lorem ipsum dolor sit amet",
	},
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
