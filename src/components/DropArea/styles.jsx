import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 0;
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ width, height, borderRadius, borderLine, borderColor, image }) => css`
    width: ${width};
    height: ${height};
    border: ${borderLine} ${borderColor};
    border-radius: ${borderRadius};
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    background-size: 100%;
    cursor: pointer;
    &:hover {
      transform: scale(1.02, 1.02);
    }
  `}

  ${({ theme, isDragActive }) =>
    isDragActive &&
    css`
      border: solid 1px ${theme.palette.primary.dark};
    `}

  ${({ theme, isDragReject }) =>
    isDragReject &&
    css`
      border: solid 1px ${theme.palette.error.main};
    `}
`;

export const UploadMessage = styled.p`
  ${({ theme }) => css`
    width: 100px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: ${theme.palette.error.main};
    position: absolute;
  `}
`;
