import styled, { css } from 'styled-components';

export const Text = styled.p`
  ${({ theme, fontSize, weight, color }) => css`
    color: ${theme.palette.text[color]};
    font-size: ${fontSize};
    font-weight: ${weight};
  `}
`;

export const Return = styled.p`
  color: #49a7a1;
`;

export const ErrorReturn = styled.p`
  color: #c65b58;
`;
