import styled, { css } from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  ${({ theme, color, height, width }) => css`
    background-color: ${theme.palette[color].dark};
    width: ${width};
    height: ${height};
  `}
`;

export const Logo = styled.img`
  width: 80%;
  margin-top: 20px;
`;

export const Avatar = styled.button`
  margin-bottom: 20px;
  border: none;
  background: none;

  &:active {
    filter: brightness(0.9);
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
`;
