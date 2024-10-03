import { defaultTheme } from "@nefex-ui/react";

const { colors, ...restDefaultTheme } = defaultTheme;

const { primary, secondary, ...restColors } = colors;

export const theme = {
  colors: {
    primary: "#059669",
    secondary: "#022c22",
    ...restColors,
  },
  ...restDefaultTheme,
};