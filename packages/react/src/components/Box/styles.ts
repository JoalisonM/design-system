import styled from 'styled-components'

export const BoxContainer = styled.div`
  padding: ${(props) => props.theme.space[4]};
  border-radius: ${(props) => props.theme.radii.md};
  background-color: ${(props) => props.theme.colors.zinc50};
  border: 1px solid ${(props) => props.theme.colors.zinc200};
`;