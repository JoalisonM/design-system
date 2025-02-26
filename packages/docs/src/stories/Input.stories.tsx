import { Box, Input, type InputProps, Text } from "@nefex-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Form/Input",
	component: Input,
	args: {
		placeholder: "Please type something",
	},
	decorators: [
		(Story) => {
			return (
				<Box
					as="label"
					style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
				>
					<Text size="sm">Something:</Text>
					{Story()}
				</Box>
			);
		},
	],
} as Meta<InputProps>;

export const Primary: StoryObj<InputProps> = {};

export const InputNumber: StoryObj<InputProps> = {
	args: {
		type: "number",
	},
};

export const Disabled: StoryObj<InputProps> = {
	args: {
		disabled: true,
		value: "someone@nefex.io",
	},
};

export const WithPrefix: StoryObj<InputProps> = {
	args: {
		prefix: "+55",
	},
};

export const WithSuffix: StoryObj<InputProps> = {
	args: {
		suffix: "@nefex.io",
	},
};
