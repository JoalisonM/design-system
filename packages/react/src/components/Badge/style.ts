import styled, { css } from "styled-components";

type BadgeContainerProps = {
  variant: "default" | "secondary" | "outline" | "destructive" | "success" | "warning";
}

export const BadgeContainer = styled.div<BadgeContainerProps>`
  display: inline-flex;
  align-items: center;

  border-radius: ${(props) => props.theme.radii.full};
  padding: 0.125rem ${(props) => props.theme.space[3]};

  font-weight: ${(props) => props.theme.fontWeights.semibold};
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.default};
  line-height: ${(props) => props.theme.lineHeights.base};


  transition: filter 0.2s;

  &:focus {
    outline: none;
  }

  &:hover {
    filter: brightness(0.9);
  }

  ${(props) => props.variant === "default" && css`
    color: ${props.theme.colors.primary};
    background-color: ${props.theme.colors.primary}15;
  `}

  ${(props) => props.variant === "secondary" && css`
    color: ${props.theme.colors.secondary};
    background-color: ${props.theme.colors.secondary}15;
  `}

  ${(props) => props.variant === "destructive" && css`
    color: ${props.theme.colors.danger};
    background-color: ${props.theme.colors.danger}15;
  `}

  ${(props) => props.variant === "outline" && css`
    color: ${props.theme.colors.zinc900};
    border: 1px solid ${props.theme.colors.zinc900};
  `}

  ${(props) => props.variant === "success" && css`
    color: ${props.theme.colors.success};
    background-color: ${props.theme.colors.success}15;
  `}

  ${(props) => props.variant === "warning" && css`
    color: ${props.theme.colors.warning};
    background-color: ${props.theme.colors.warning}15;
  `}
`;
