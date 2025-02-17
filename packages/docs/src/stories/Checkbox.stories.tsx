import { Box, Checkbox, type CheckboxProps, Text } from "@nefex-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Form/Checkbox",
	component: Checkbox,
	decorators: [
		(Story) => {
			return (
				<Box
					as="label"
					style={{
						display: "flex",
						alignItems: "center",
						flexDirection: "row",
						gap: "0.5rem",
					}}
				>
					{Story()}
					<Text size="sm">Accept terms of use</Text>
				</Box>
			);
		},
	],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
