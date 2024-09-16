import styled, { css } from "styled-components";

type ButtonContainerProps = {
  hover: "default" | "info" | "danger";
  size: "default" | "sm" | "lg" | "icon";
  variant: "default" | "destructive" | "success" | "outline" | "ghost" | "link";
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.space[2]};
  white-space: nowrap;
  border: 0;
  cursor: pointer;
  border-radius: ${(props) => props.theme.radii.xs};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  background-color: transparent;
  transition: background-color 0.2s, filter 0.2s, text-decoration 0.2s, color 0.2s;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 calc(2px + 2px) ${(props) => props.theme.colors.primary}70;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${(props) =>
    props.variant === "default" &&
    css`
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.zinc100};

      &:not(:disabled):hover {
        filter: brightness(0.9);
      }
    `}

  ${(props) =>
    props.variant === "destructive" &&
    css`
      background-color: ${(props) => props.theme.colors.error800};
      color: ${(props) => props.theme.colors.zinc100};

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme.colors.error900};
      }
    `}

  ${(props) =>
    props.variant === "success" &&
    css`
      background-color: ${(props) => props.theme.colors.emerald500};
      color: ${(props) => props.theme.colors.zinc100};

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme.colors.emerald600};
      }
    `}

  ${(props) =>
    props.variant === "outline" &&
    css`
      border: 2px solid ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.primary};
    `}

  ${(props) =>
    props.variant === "link" &&
    css`
      text-underline-offset: 4px;
      color: ${(props) => props.theme.colors.primary};

      &:not(:disabled):hover {
        text-decoration: underline;
      }
    `}

    ${(props) =>
    props.variant === "ghost" &&
    css`
      color: ${(props) => props.theme.colors.zinc900};
      &:not(:disabled):hover {
        background-color: ${(props) => props.theme.colors.zinc100};
      }
    `}

  ${(props) =>
    props.size === "default" &&
    css`
      height: ${(props) => props.theme.space[10]};
      padding: ${(props) => props.theme.space[2]}
        ${(props) => props.theme.space[4]};
    `}

  ${(props) =>
    props.size === "sm" &&
    css`
      height: ${(props) => props.theme.space[8]};
      border-radius: ${(props) => props.theme.radii.xs};
      padding: 0 ${(props) => props.theme.space[4]};
    `}

  ${(props) =>
    props.size === "lg" &&
    css`
      height: ${(props) => props.theme.space[12]};
      border-radius: ${(props) => props.theme.radii.xs};
      padding: 0 ${(props) => props.theme.space[8]};
    `}

  ${(props) =>
    props.size === "icon" &&
    css`
      width: ${(props) => props.theme.space[10]};
      height: ${(props) => props.theme.space[10]};
    `}

  ${(props) =>
    props.hover === "info" &&
    css`
      &:not(:disabled):hover {
        background-color: ${(props) => props.theme.colors.teal300}15;
        color: ${(props) => props.theme.colors.teal300};
      }
    `}

  ${(props) =>
    props.hover === "danger" &&
    css`
      &:not(:disabled):hover {
        background-color: ${(props) => props.theme.colors.danger}15;
        color: ${(props) => props.theme.colors.danger};
      }
    `}
`;
