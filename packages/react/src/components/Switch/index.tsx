import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { ThemeProvider } from "styled-components";
import type * as SwitchPrimitives from "@radix-ui/react-switch";

import { SwitchRoot, SwitchThumb } from "./styles";

import { defaultTheme } from "../../styles/themes/default";

type SwitchPropsRef = ElementRef<typeof SwitchPrimitives.Root>;
export type SwitchProps = ComponentPropsWithoutRef<
  typeof SwitchPrimitives.Root
>;

export const Switch = forwardRef<SwitchPropsRef, SwitchProps>(
  ({ ...props }, ref) => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <SwitchRoot ref={ref} {...props}>
          <SwitchThumb />
        </SwitchRoot>
      </ThemeProvider>
    );
  }
);
