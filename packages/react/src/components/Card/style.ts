import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.zinc200};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

export const CardHeaderContainer = styled.div`
  display: flex;
  padding: ${(props) => props.theme.space[6]};
  flex-direction: column;
  gap: ${(props) => props.theme.space[2]};
`;

export const CardContentContainer = styled.div`
  padding: ${(props) => props.theme.space[6]};
  padding-top: 0;
`;

export const CardFooterContainer = styled.div`
  padding: ${(props) => props.theme.space[6]};
  padding-top: 0;

  display: flex;
  align-items: center;
`;
