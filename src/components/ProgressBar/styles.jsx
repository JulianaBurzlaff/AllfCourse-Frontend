import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
`;

export const PGBar = styled.div`
  width: 80%;
`;
export const Value = styled.div`
  ${({ theme }) => css`
    font-size: 12px;
    color: ${theme.palette.primary.main};
    margin-left: 5px;
  `};
`;
