import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

import {
	PageHeaderButtons,
	PageHeaderContainer,
	PageHeaderContent,
	PageHeaderHeading,
} from "./style";

import { Heading } from "../Heading";
import { Text } from "../Text";

export type PageHeaderProps = HTMLAttributes<HTMLDivElement> & {
	title: string;
	subTitle?: ReactNode;
	buttons?: ReactNode;
};

export const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
	({ title, subTitle, buttons, children, ...props }, ref) => {
		return (
			<PageHeaderContainer ref={ref} {...props}>
				<PageHeaderHeading subTitle={!!subTitle}>
					<div>
						<Heading as="h1" size="md">
							{title}
						</Heading>
						{subTitle && (
							<Text as="span" size="xs">
								{subTitle}
							</Text>
						)}
					</div>

					{buttons && <PageHeaderButtons>{buttons}</PageHeaderButtons>}
				</PageHeaderHeading>

				{children && <PageHeaderContent>{children}</PageHeaderContent>}
			</PageHeaderContainer>
		);
	},
);

PageHeader.displayName = "PageHeader";

export default PageHeader;
