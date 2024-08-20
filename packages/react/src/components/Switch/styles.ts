import * as SwitchPrimitives from '@radix-ui/react-switch'
import styled from 'styled-components'

export const SwitchRoot = styled(SwitchPrimitives.Root)`
  all: unset;
  background-color: ${(props) => props.theme.colors.zinc200};
  position: relative;
  display: inline-flex;
  align-items: center;
  border-radius: ${(props) => props.theme.radii.full};
  border: 0;
  width: ${(props) => props.theme.space[12]};
  height: ${(props) => props.theme.space[6]};
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:focus {
    outline: 0;
    box-shadow: 0 0 2px 1px ${(props) => props.theme.colors.amber500};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &[data-state="checked"] {
    background-color: ${(props) => props.theme.colors.amber500};
  }
`

export const SwitchThumb = styled(SwitchPrimitives.Thumb)`
  display: block;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.radii.full};
  width: ${(props) => props.theme.space[5]};
  height: ${(props) => props.theme.space[5]};
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);

  &[data-state="checked"] {
    transform: translateX(26px);
  }
`