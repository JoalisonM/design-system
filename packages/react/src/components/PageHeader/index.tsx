import React, { forwardRef, HTMLAttributes, ReactNode } from "react";

import {
  PageHeaderButtons,
  PageHeaderContent,
  PageHeaderHeading,
  PageHeaderContainer,
} from "./style";

import { Text } from "../Text";
import { Heading } from "../Heading";

export type PageHeaderProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  subTitle?: string;
  buttons?: ReactNode;
}

export const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>((
  { title, subTitle, buttons, children, ...props }, ref
) => {
  return (
    <PageHeaderContainer ref={ref} {...props}>
      <PageHeaderHeading subTitle={subTitle ? true : false}>
        <div>
          <Heading as="h1" size="md">{title}</Heading>
          {subTitle && (<Text size="xs">{subTitle}</Text>)}
        </div>

        {buttons && (<PageHeaderButtons>{buttons}</PageHeaderButtons>)}
      </PageHeaderHeading>

      {children && (<PageHeaderContent>{children}</PageHeaderContent>)}
    </PageHeaderContainer>
  );
});

PageHeader.displayName = "PageHeader";

export default PageHeader;
