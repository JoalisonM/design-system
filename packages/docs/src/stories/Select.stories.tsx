import { Box, Select, type SelectProps } from "@nefex-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Select",
  component: Select,
  args: {
    placeholder: "Select something",
    showSearch: true,
    defaultValue: "Orange",
    children: (
      <>
        <Select.Option value="Apple">Apple</Select.Option>
        <Select.Option value="Orange">Orange</Select.Option>
        <Select.Option value="A">A</Select.Option>
        <Select.Option value="B">B</Select.Option>
        <Select.Option value="C">C</Select.Option>
        <Select.Option value="D">D</Select.Option>
        <Select.Option value="E">E</Select.Option>
        <Select.Option value="F">F</Select.Option>
        <Select.Option value="G">G</Select.Option>
        <Select.Option value="H">H</Select.Option>
        <Select.Option value="J">J</Select.Option>
        <Select.Option value="K">K</Select.Option>
        <Select.Option value="L">L</Select.Option>
        <Select.Option value="M">M</Select.Option>
        <Select.Option value="N">N</Select.Option>
        <Select.Option value="O">O</Select.Option>
      </>
    ),
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>;
    },
  ],
} as Meta<SelectProps>;

export const Primary: StoryObj<SelectProps> = {};

export const Disabled: StoryObj<SelectProps> = {
  args: {
    disabled: true,
  },
};
