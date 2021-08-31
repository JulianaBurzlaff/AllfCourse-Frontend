import styled, { css } from 'styled-components';

export const BannerContainer = styled.button`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: ${theme.palette.primary.contrastText};
    border: 1px solid ${theme.palette.primary.light};
    box-sizing: border-box;
    border-radius: 10px;
    width: 99%;
    margin: 10px 2px 2px 2px;

    &:hover {
      cursor: pointer;
      transform: scale(1.01, 1.01);
    }

    &:active {
      filter: brightness(0.9);
    }
  `}

  @media (max-width: 1000px) {
    & {
      flex-direction: column;
    }
  }
`;

export const CouseDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 45%;
  margin: 15px 0;
  ${({ theme }) => css`
    > h3 {
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 18px;
      color: ${theme.palette.primary.dark};
    }
    > p {
      font-weight: normal;
      font-size: 14px;
      color: ${theme.palette.text.primary};
    }
  `}

  @media (max-width: 1000px) {
    & {
      width: 90%;
      align-items: center;
    }
  }
`;

export const CouseAnalysis = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 45%;
  margin: 10px 0;

  @media (max-width: 1000px) {
    & {
      width: 90%;
    }
  }

  @media (max-width: 550px) {
    & {
      flex-direction: column;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  > h3 {
    ${({ theme }) => css`
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 14px;
      color: ${theme.palette.primary.dark};
    `}
  }
  > p {
    ${({ theme }) => css`
      font-weight: normal;
      font-size: 16px;
      color: ${theme.palette.text.primary};
    `}

    ${({ theme, inReview }) =>
      inReview &&
      css`
        font-weight: 500;
        color: ${theme.palette.warning.dark};
      `}

      ${({ theme, rejected }) =>
      rejected &&
      css`
        font-weight: 500;
        color: ${theme.palette.error.dark};
      `}
  }

  @media (max-width: 550px) {
    & {
      width: 90%;
      margin-bottom: 10px;
    }
  }
`;
