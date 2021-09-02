import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  margin-bottom: 70px;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

export const Teacher = styled.div`
  font-size: 18px;
  margin-top: 15px;
`;

export const Description = styled.div`
  margin-top: 16px;
`;

export const ValuesContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0 10px;
`;

export const Values = styled.div`
  h3 {
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-bottom: 5px;

    h6 {
      margin-right: 5px;
      font-weight: normal;
      font-size: 16px;
    }
  }
  p {
    font-size: 14px;
  }
`;

export const Categories = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
`;

export const CategoriesTags = styled.div`
  display: flex;
`;

export const Image = styled.img`
  max-width: 300px;
`;

export const Progress = styled.div`
  width: 90%;
`;

export const CategoryTitle = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Category = styled.div`
  ${({ theme }) => css`
    margin-right: 8px;
    border-radius: 5px;
    padding: 6px;
    background-color: ${theme.palette.text.primary};
    color: ${theme.palette.text.secondary};
  `}
`;
