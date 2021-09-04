import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme, fontSize, margin }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 5px;
    font-size: ${fontSize};
    margin: ${margin || '2px'};

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
        border: solid 1px ${theme.palette.primary.main};
      `}

    ${({ color }) =>
      color === 'secondary' &&
      css`
        color: ${theme.palette.primary.contrastText};
        background-color: ${theme.palette.error.dark};
        border: solid 1px ${theme.palette.error.dark};
      `}

    ${({ color }) =>
      color === 'neutral' &&
      css`
        color: ${theme.palette.text.primary};
        background-color: ${theme.palette.primary.contrastText};
        opacity: 0.8;
        box-sizing: border-box;
        border: solid 1px ${theme.palette.text.primary};
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
