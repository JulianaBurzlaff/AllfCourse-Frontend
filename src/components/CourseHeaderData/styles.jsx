import styled, { css } from 'styled-components';

export const Title = styled.p`
  ${({ theme, fontSize, weight, color, margin, width }) => css`
    color: ${theme.palette.primary[color]};
    font-size: ${fontSize};
    font-weight: ${weight};
    margin: ${margin};
    width: ${width};
    text-align: center;
  `}
`;

export const Text = styled.p`
  ${({ theme, fontSize, weight, color, margin }) => css`
    color: ${theme.palette.text[color]};
    font-size: ${fontSize};
    font-weight: ${weight};
    margin: ${margin};
    text-align: center;
  `}
`;

export const Image = styled.img`
  height: 200px;
`;

export const Flag = styled.div`
  ${({ theme }) => css`
    background: ${theme.palette.secondary.dark};
    margin: 2.5px;
  `}
`;
