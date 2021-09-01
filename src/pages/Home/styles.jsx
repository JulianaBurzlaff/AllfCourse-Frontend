import styled, { css } from 'styled-components';

export const Form = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;

    ${theme.breakpoints.up('sm')} {
      width: 50%;
      max-width: 350px;
    }
  `}
`;

export const LoginName = styled.p`
  font-size: 26px;
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

export const Return = styled.span`
  color: #49a7a1;
  height: 15px;
`;

export const ErrorReturn = styled.span`
  color: #c65b58;
  height: 15px;
`;
