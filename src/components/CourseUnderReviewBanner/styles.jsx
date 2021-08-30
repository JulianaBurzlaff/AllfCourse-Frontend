import styled, { css } from 'styled-components';

export const BannerContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: ${theme.palette.primary.contrastText};
    border: 1px solid ${theme.palette.primary.main};
    box-sizing: border-box;
    border-radius: 10px;
    width: 90%;
    margin-top: 10px;
  `}
`;

export const CouseDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  margin: 10px 0;
  ${({ theme }) => css`
    > h3 {
      margin-bottom: 5px;
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
`;

export const CouseAnalysis = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 35%;
  margin: 10px 0;
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
      margin-bottom: 10px;
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
`;
