import { defaultTheme } from "@nefex-ui/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs", "autodocs"],
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: defaultTheme,
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
    }),
  ],
};

export default preview;
