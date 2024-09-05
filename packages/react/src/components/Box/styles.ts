import styled from "styled-components";

export const BoxContainer = styled.div`
  padding: ${(props) => props.theme.space[4]};
  border-radius: ${(props) => props.theme.radii.md};
  background-color: ${(props) => props.theme.colors.zinc50};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;
