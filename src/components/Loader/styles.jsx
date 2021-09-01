import styled, { css, keyframes } from 'styled-components';

export const Loader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Spinner = styled.span`
  ${({ theme }) => css`
    width: 200px;
    height: 200px;
    border: 5px solid ${theme.palette.primary.light};
    border-top-color: ${theme.palette.primary.main};
    border-radius: 50%;
    animation: 1s ${Spin} linear infinite;
  `}
`;
