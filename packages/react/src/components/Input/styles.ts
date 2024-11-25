import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: baseline;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  border-radius: ${(props) => props.theme.radii.xs};
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.zinc200};
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[3]};

  &:has(input:focus) {
    box-shadow: 0 0 2px 1px ${(props) => props.theme.colors.primary};
  }

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors.zinc200};
    border-color: ${(props) => props.theme.colors.zinc400};
  }
`;

export const Prefix = styled.span`
  font-family: ${(props) => props.theme.fonts.default};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.zinc500};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

export const Suffix = styled.span`
  font-family: ${(props) => props.theme.fonts.default};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.zinc500};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;

export const Trigger = styled.input`
  font-family: ${(props) => props.theme.fonts.default};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.zinc800};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  background: transparent;
  border: 0;
  width: 100%;

  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: not-allowed;
    color: ${(props) => props.theme.colors.zinc950};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.zinc400};
    font-size: ${(props) => props.theme.fontSizes.xs};
  }
`;
