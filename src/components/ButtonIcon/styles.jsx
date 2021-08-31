import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme, fontSize }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 5px;
    font-size: ${fontSize};
    margin: 2px;

    &:active {
      filter: brightness(0.9);
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.02, 1.02);
    }

    ${({ color }) =>
      color === 'primary' &&
      css`
        color: ${theme.palette.primary.contrastText};
        background-color: ${theme.palette.primary.main};
        border: none;
      `}

    ${({ color }) =>
      color === 'secondary' &&
      css`
        color: ${theme.palette.primary.contrastText};
        background-color: ${theme.palette.error.error};
        border: none;
      `}

    ${({ color }) =>
      color === 'neutral' &&
      css`
        color: ${theme.palette.text.primary};
        background-color: ${theme.palette.primary.contrastText};
        border: ${theme.palette.text.primary};
      `}
  `}
`;

export const Icon = styled.img`
  ${({ fontSize }) => css`
    height: calc(${fontSize} + 2px);
    margin: 10px 10px 10px 18px;
  `}
`;

export const Text = styled.p`
  ${({ fontSize }) => css`
    font-size: ${fontSize};
    font-weight: 500;
    margin-right: 18px;
  `}
`;
