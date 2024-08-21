import styled from "styled-components";
import * as Avatar from "@radix-ui/react-avatar";
import type { space } from "@nefex-ui/tokens";

export type AvatarContainerProps = {
  size: keyof typeof space;
};

export const AvatarContainer = styled(Avatar.Root)<AvatarContainerProps>`
  border-radius: ${(props) => props.theme.radii.full};
  display: inline-block;
  width: ${(props) => props.theme.space[props.size]};
  height: ${(props) => props.theme.space[props.size]};
  overflow: hidden;
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.zinc600};
  color: ${(props) => props.theme.colors.zinc800};

  svg {
    width: ${(props) => props.theme.space[6]};
    height: ${(props) => props.theme.space[6]};
  }
`;
