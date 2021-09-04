import styled, { css } from 'styled-components';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

export const FlagsSelect = styled(Autocomplete)`
  width: 92.5%;
`;

export const FlagsInput = styled(TextField)`
  font-size: 16px;
  width: 100%;
`;

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
  `}
`;

export const Input = styled.div`
  font-size: 16px;
  width: 95%;
`;

export const Flag = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${theme.palette.secondary.dark};
    border-radius: 5px;
    margin: 5px;
  `}
`;

export const FlagLabel = styled.p`
  ${({ theme }) => css`
    color: ${theme.palette.text.secondary};
    font-size: 14px;
    margin: 2px 5px;
  `}
`;
