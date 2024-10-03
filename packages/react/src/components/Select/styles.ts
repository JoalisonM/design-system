import styled from "styled-components";
import * as SelectPrimitive from "@radix-ui/react-select";

export const SelectTriggerContainer = styled(SelectPrimitive.Trigger)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.theme.space[5]};

  height: 42px;
  border-radius: ${(props) => props.theme.radii.xs};
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.zinc200};
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[4]};

  font-family: ${(props) => props.theme.fonts.default};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.zinc800};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  resize: vertical;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  svg {
    width: ${(props) => props.theme.space[4]};
    height: ${(props) => props.theme.space[4]};
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

  &[data-placeholder] {
    font-family: ${(props) => props.theme.fonts.default};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    color: ${(props) => props.theme.colors.zinc400};
    font-size: ${(props) => props.theme.fontSizes.xs};
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
  position: relative;
  z-index: 9999;
  width: 100%;
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.radii.xs};
  padding: ${(props) => props.theme.space[2]} 0;
  padding-left: ${(props) => props.theme.space[8]};
  padding-right: ${(props) => props.theme.space[2]};

  font-family: ${(props) => props.theme.fonts.default};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.zinc800};
  font-weight: ${(props) => props.theme.fontWeights.regular};

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.colors.primary};
  }

  &:focus {
    outline: 0;
  }

  &[data-highlighted] {
    background-color: ${(props) => props.theme.colors.zinc100};
  }

  &[data-state="checked"] {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.primary}15;
  }
`;

export const ItemIndicatorContainer = styled.span`
  position: absolute;
  top: 14px;
  left: 8px;
  height: 0.875rem;
  width: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
