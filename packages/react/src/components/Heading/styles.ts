import styled from "styled-components";

type HeadingContainerProps = {
  size: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";;
};

export const HeadingContainer = styled.h2<HeadingContainerProps>`
  font-family: ${(props) => props.theme.fonts.default};
  line-height: ${(props) => props.theme.lineHeights.base};
  margin: 0;
  color: ${(props) => props.theme.colors.zinc900};
  font-size: ${(props) => props.theme.fontSizes[props.size]};
  -webkit-font-smoothing: antialiased;
`;
