import styled, { css } from 'styled-components';

export const BannerContainer = styled.button`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: ${theme.palette.primary.contrastText};
    border: 1px solid ${theme.palette.primary.light};
    box-sizing: border-box;
    border-radius: 10px;
    width: 23%;
    min-width: 250px;
    margin: 2px 5px 10px 5px;
    overflow: hidden;

    &:hover {
      cursor: pointer;
      transform: scale(1.01, 1.01);
    }

    &:active {
      filter: brightness(0.9);
    }

    ${({ inactive }) =>
      inactive &&
      css`
        border: 1px solid ${theme.palette.warning.main};
      `}
  `}
`;

export const ImageContainer = styled.img`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    overflow: hidden;
    background: ${theme.palette.primary.light};
    border: 1px solid ${theme.palette.primary.light};
    box-sizing: border-box;
    border-radius: 10px 10px 0px 0px;
    padding: 10px;
  `}
`;

export const CourseDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  margin: 10px 0 20px 0;
  ${({ theme }) => css`
    > h3 {
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 18px;
      color: ${theme.palette.primary.dark};

      ${({ inactive }) =>
        inactive &&
        css`
          color: ${theme.palette.warning.dark};
        `}
    }
    > p {
      font-weight: normal;
      font-size: 14px;
      color: ${theme.palette.text.primary};
    }
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  width: 90%;
  margin-bottom: 10px;
`;

export const TeacherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 55%;
  > h3 {
    ${({ theme }) => css`
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 12px;
      color: ${theme.palette.primary.dark};
    `}

    ${({ theme, inactive }) =>
      inactive &&
      css`
        color: ${theme.palette.warning.dark};
      `}
  }
  > p {
    ${({ theme }) => css`
      text-align: left;
      font-weight: normal;
      font-size: 12px;
      color: ${theme.palette.text.primary};
    `}
  }
`;

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  > h3 {
    ${({ theme }) => css`
      width: 100%;
      text-align: center;
      margin-bottom: 5px;
      font-weight: 600;
      font-size: 18px;
      color: ${theme.palette.primary.dark};
    `}

    ${({ theme, inactive }) =>
      inactive &&
      css`
        color: ${theme.palette.warning.dark};
      `}
  }
  > p {
    ${({ theme }) => css`
      width: 100%;
      text-align: center;
      font-weight: normal;
      font-size: 12px;
      color: ${theme.palette.text.primary};
    `}
  }
`;

export const Progress = styled.div`
  width: 90%;
`;
