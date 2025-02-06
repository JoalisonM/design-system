import styled, { css } from "styled-components";

export const PageHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

type PageHeaderHeadingProps = {
  subTitle: boolean;
}

export const PageHeaderHeading = styled.div<PageHeaderHeadingProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.theme.space[3]};

  >div {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
  }

  h1, h2, h3, h4, h4, h6 {
    font-weight: 600;
    color: ${(props) => props.theme.colors.zinc600};
    position: relative;
    padding-right: ${(props) => props.theme.space[4]};

    ${(props) => props.subTitle && css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 1px;
        content: "";
        background-color: ${(props) => props.theme.colors.zinc200};
      }
    `}
  }

  span {
    font-weight: 400;
    color: ${(props) => props.theme.colors.zinc500};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const PageHeaderContent = styled.div`
`;

export const PageHeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
