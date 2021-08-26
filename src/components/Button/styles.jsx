import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme, color, backgroundColor, height, fullWidth }) => css`
    background-color: ${theme.palette[backgroundColor]};
    color: ${theme.palette[color]};
    height: ${height};
    width: ${fullWidth ? '100%' : 'auto'};
    padding: 0 16px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
  `}
  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;
