import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 20px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const LinkButton = styled.button`
  ${({ theme }) => css`
    font-size: 12px;
    margin: 7px 0 20px;
    text-decoration: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${theme.palette.primary.main};
    &:hover {
      transform: scale(1.1, 1.1);
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.palette.text.primary};
    font-size: 12px;
    margin: 24px 0 35px 0;
  `}
`;

export const Input = styled.div`
  width: 250px;
  margin: 5px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
`;
