import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";

import { TextAreaContainer } from "./styles";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	({ ...props }, ref) => {
		return <TextAreaContainer ref={ref} {...props} />;
	},
);

TextArea.displayName = "TextArea";
