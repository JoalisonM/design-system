import type { HTMLAttributes } from "react";
import { forwardRef } from "react";
import { ThemeProvider } from "styled-components";

import { MultiStepContainer, Label, Steps, Step } from "./styles";

import { defaultTheme } from "../../styles/themes/default";

export type MultiStepProps = HTMLAttributes<HTMLDivElement> & {
  size: number;
  currentStep?: number;
};

export const MultiStep = forwardRef<HTMLDivElement, MultiStepProps>(
  ({ size, currentStep = 1 }, ref) => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <MultiStepContainer ref={ref}>
          <Label size="xs">
            Passo {currentStep} de {size}
          </Label>

          <Steps size={size}>
            {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
              return <Step key={step} active={currentStep >= step} />;
            })}
          </Steps>
        </MultiStepContainer>
      </ThemeProvider>
    );
  }
);

MultiStep.displayName = "MultiStep";
