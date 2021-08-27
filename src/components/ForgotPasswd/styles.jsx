import styled, { css } from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginName = styled.p`
  font-size: 26px;
`;

export const Text = styled.p`
  font-size: 20px;
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
