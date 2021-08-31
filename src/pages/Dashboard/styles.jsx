import styled, { css } from 'styled-components';

export const Text = styled.p`
  ${({ theme, fontSize, weight, color }) => css`
    color: ${theme.palette.text[color]};
    font-size: ${fontSize};
    font-weight: ${weight};
    padding-left: 12px;
    margin-bottom: 35px;
  `}
`;
