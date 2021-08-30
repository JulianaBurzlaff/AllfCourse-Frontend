import styled, { css } from 'styled-components';

export const SectionTitle = styled.div`
  ${({ theme, contentDirection }) => css`
    display: flex;
    flex-direction: ${contentDirection};
    justify-content: flex-start;
    align-items: flex-start;
    width: calc(90% - 10px);
    padding-left: 10px;
    background: ${theme.palette.secondary.main};
    border-radius: 5px 0px 0px 5px;
    margin-bottom: 17px;
  `}
`;

export const Text = styled.p`
  ${({ theme, fontSize, weight, color }) => css`
    color: ${theme.palette.text[color]};
    font-size: ${fontSize};
    font-weight: ${weight};
    padding: 5px 0;
  `}
`;
