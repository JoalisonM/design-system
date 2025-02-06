import styled, { css } from "styled-components";
import * as Avatar from "@radix-ui/react-avatar";

export type AvatarContainerProps = {
  size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 12 | 16 | 20 | 40 | 64 | 80;
};

export const AvatarContainer = styled(Avatar.Root) <AvatarContainerProps>`
  border-radius: ${(props) => props.theme.radii.full};
  display: inline-block;
  width: ${(props) => props.theme.space[props.size]};
  height: ${(props) => props.theme.space[props.size]};
  overflow: hidden;

  font-family: ${(props) => props.theme.fonts.default};
  line-height: ${(props) => props.theme.lineHeights.base};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  -webkit-font-smoothing: antialiased;

  svg {
    width: ${({ theme }) => theme.space[6]};
    height: ${({ theme }) => theme.space[6]};
  }


  ${(({ size, theme }) => size === 40 && css`
    svg {
      width: ${theme.space[12]};
      height: ${theme.space[12]};
    }
    font-size: ${theme.fontSizes["4xl"]};
  `)}

  ${(({ size, theme }) => size === 64 && css`
    svg {
      width: ${theme.space[16]};
      height: ${theme.space[16]};
    }
    font-size: ${theme.fontSizes["6xl"]};
  `)}

  ${(({ size, theme }) => size === 80 && css`
    svg {
      width: ${theme.space[20]};
      height: ${theme.space[20]};
    }
    font-size: ${theme.fontSizes["8xl"]};
  `)}
`;

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

export const AvatarFallback = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex !important;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary}50;
  color: ${(props) => props.theme.colors.primary};
`;
