import styled, { css } from 'styled-components';

export const Container = styled.div.attrs({
  className: 'dropzone',
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({
    theme,
    width,
    height,
    borderRadius,
    borderLine,
    borderColor,
    image,
    margin,
  }) => css`
    width: ${width};
    height: ${height};
    border: ${borderColor === 'none'
      ? 'none'
      : `${borderLine} 1px ${theme.palette[borderColor].main}`};
    border-radius: ${borderRadius};
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    background-size: 100%;
    margin: ${margin};
  `}

  ${({ theme, isDragActive, borderLine }) =>
    isDragActive &&
    css`
      border: ${borderLine} 1px ${theme.palette.primary.dark};
    `}

  ${({ theme, isDragReject, borderLine }) =>
    isDragReject &&
    css`
      border: ${borderLine} 1px ${theme.palette.error.main};
    `}
`;

export const DropContainer = styled.div`
  ${({ width, height }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${width};
    height: ${height};
  `}

  &:hover {
    cursor: pointer;
    transform: scale(1.02, 1.02);
  }
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
