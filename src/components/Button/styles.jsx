import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme, color, height, width, fullWidth }) => css`
    background-color: ${theme.palette[color].main};
    color: ${theme.palette[color].contrastText};
    height: ${height};
    width: ${fullWidth ? '100%' : width};
    padding: 0 16px;
    border: none;
    border-radius: 5px;
    font-size: 18px;

    &:active {
      filter: brightness(0.9);
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.02, 1.02);
    }

    /* @media screen (min-width: 768px) {
      padding: 0 16px;
    } */
    ${theme.breakpoints.up('sm')} {
      padding: 0 16px;
    }
  `}
  ${({ loading }) =>
    loading &&
    `
   pointer-events: none;
  `}
`;
