import styled, { css } from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';

export const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 5px 0;
`;
export const PGBar = styled.div`
  width: 80%;
`;

export const ProgressBar = styled(LinearProgress)`
  ${({ heightpb }) => css`
    height: ${heightpb};
  `};
`;

export const Value = styled.div`
  ${({ theme, fontSize }) => css`
    font-size: ${fontSize};
    color: ${theme.palette.primary.main};
    margin-left: 5px;
  `};
`;
