import styled from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";

export const CheckboxRoot = styled(Checkbox.Root)`
  all: unset;
  width: ${(props) => props.theme.space[6]};
  height: ${(props) => props.theme.space[6]};
  border-radius: ${(props) => props.theme.radii.xs};
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.zinc200};
  line-height: 0;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  display: flex;
  align-items: center;
  justify-content: center;

  &[data-state="checked"] {
    background-color: ${(props) => props.theme.colors.amber500};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 2px 1px ${(props) => props.theme.colors.amber500};
  }
`;

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${(props) => props.theme.colors.white};
  width: ${(props) => props.theme.space[4]};
  height: ${(props) => props.theme.space[4]};
`;
