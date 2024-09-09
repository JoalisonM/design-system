import React, { forwardRef, HTMLAttributes, ReactNode } from "react";

import { Text } from "../Text";
import { Heading } from "../Heading";

import {
  PageHeaderButtons,
  PageHeaderContent,
  PageHeaderHeading,
  PageHeaderContainer,
} from "./style";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "../../styles/themes/default";

export type PageHeaderProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  subTitle?: string;
  buttons?: ReactNode;
}

export const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>((
  { title, subTitle, buttons, children, ...props }, ref
) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PageHeaderContainer ref={ref} {...props}>
        <PageHeaderHeading subTitle={subTitle ? true : false}>
          <div>
            <Heading as="h1" size="xl">{title}</Heading>
            {subTitle && (<Text size="sm">{subTitle}</Text>)}
          </div>

          {buttons && (<PageHeaderButtons>{buttons}</PageHeaderButtons>)}
        </PageHeaderHeading>

        {children && (<PageHeaderContent>{children}</PageHeaderContent>)}
      </PageHeaderContainer>
    </ThemeProvider>
  );
});

export default PageHeader;
