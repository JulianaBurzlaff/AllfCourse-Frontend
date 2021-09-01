import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  width: 100%;
  height: 60px;
  overflow: hidden;

  ${({ theme, active }) =>
    active &&
    css`
      background: ${theme.palette.primary.contrastText};
    `}
`;

export const Link = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  border-style: none;
  border-radius: 0;
  width: 100%;
  height: 60px;

  &:active {
    filter: brightness(0.9);
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
`;

export const Icon = styled.img`
  width: 30px;
`;
