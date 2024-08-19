import styled, { css } from "styled-components";
import { Text } from "../Text";

export const MultiStepContainer = styled.div``

export const Label = styled(Text)`
  color: ${(props) => props.theme.colors.zinc500};
`
type StepsProps = {
  size: number;
}

export const Steps = styled.div<StepsProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.size}, 1fr);
  gap: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[1]};
`

type StepProps = {
  active: boolean
}

export const Step = styled.div<StepProps>`
  height: ${(props) => props.theme.space[1]};
  border-radius: ${(props) => props.theme.radii.px};
  background-color: ${(props) => props.theme.colors.zinc600};

  ${(props) => props.active && css`
    background-color: ${props.theme.colors.amber500};
  `}
`