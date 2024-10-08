import styled from "styled-components";

type TextContainerProps = {
  size: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
};

export const TextContainer = styled.p<TextContainerProps>`
  font-family: ${(props) => props.theme.fonts.default};
  line-height: ${(props) => props.theme.lineHeights.base};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  margin: 0;
  color: ${(props) => props.theme.colors.zinc900};
  font-size: ${(props) => props.theme.fontSizes[props.size]};
  -webkit-font-smoothing: antialiased;
`;
