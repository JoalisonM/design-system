import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

import { Label, MultiStepContainer, Step, Steps } from "./styles";

export type MultiStepProps = HTMLAttributes<HTMLDivElement> & {
	size: number;
	currentStep?: number;
};

export const MultiStep = forwardRef<HTMLDivElement, MultiStepProps>(
	({ size, currentStep = 1 }, ref) => {
		return (
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
		);
	},
);

MultiStep.displayName = "MultiStep";
