import * as SelectPrimitive from "@radix-ui/react-select";
import styled from "styled-components";

export const SelectTriggerContainer = styled(SelectPrimitive.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.theme.space[5]};

  height: 35px;
  width: 100%;
  border-radius: ${(props) => props.theme.radii.xs};
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.zinc200};

  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  svg {
    color: ${(props) => props.theme.colors.zinc400};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 2px 1px ${(props) => props.theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.zinc200};
    border-color: ${(props) => props.theme.colors.zinc400};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.zinc600};
    font-size: ${(props) => props.theme.fontSizes.xs};
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 0;

  font-family: ${(props) => props.theme.fonts.default};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.zinc800};
  font-weight: ${(props) => props.theme.fontWeights.regular};

  &:focus {
    outline: 0;
  }
`;

export const SelectContentContainer = styled(SelectPrimitive.Content)`
  position: relative;
  z-index: 100;
  width: var(--radix-select-trigger-width);
  border-radius: ${(props) => props.theme.radii.md};
  border: 1px solid ${(props) => props.theme.colors.zinc100};
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  max-height: ${(props) => props.theme.space[80]};
  overflow-y: auto;
  min-height: ${(props) => props.theme.space[16]};
`;

type SelectViewportContainerProps = {
  position: "item-aligned" | "popper";
};

export const SelectViewportContainer = styled(
  SelectPrimitive.Viewport
) <SelectViewportContainerProps>`
  padding: ${(props) => props.theme.space[1]};
`;

export const SelectItemContainer = styled(SelectPrimitive.Item)`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.radii.xs};
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[4]};

  font-family: ${(props) => props.theme.fonts.default};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.zinc800};
  font-weight: ${(props) => props.theme.fontWeights.regular};

  span {
    display: inline-flex;
    align-items: center;
  }

  svg {
    width: ${(props) => props.theme.space[4]};
    height: ${(props) => props.theme.space[4]};
    color: ${(props) => props.theme.colors.primary};
  }

  &:focus {
    outline: 0;
  }

  &[data-highlighted] {
    background-color: ${(props) => props.theme.colors.zinc100};
  }

  &[data-state="checked"] {
    background-color: ${(props) => props.theme.colors.amber50};
  }
`;
