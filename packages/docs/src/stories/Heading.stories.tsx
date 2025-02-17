import { Box, Heading, type HeadingProps } from "@nefex-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Lorem ipsum dolor",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {
  args: {
    size: "xl",
  },
  argTypes: {
    size: {
      type: "string",
      description:
        "sm | lg | xxs | xs | md | xl | 2xl | 4xl | 5xl | 6xl | 7xl | 8xl | 9xl",
      options: [
        "sm",
        "lg",
        "xxs",
        "xs",
        "md",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: { type: "select" },
    },
    as: {
      type: "string",
      description: "h1 | h2 | h3 | h4 | 45 | h6",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "select" },
    },
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>;
    },
  ],
};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: "h1",
    size: "4xl",
    children: "Lorem ipsum dolor",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`",
      },
    },
  },
};
