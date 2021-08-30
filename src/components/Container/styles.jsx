import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({
    direction,
    justifyContent,
    alignItems,
    wrap,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    overflowX,
    overflowY,
    margin,
    padding,
  }) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-wrap: ${wrap || 'none'};
    width: ${width};
    min-width: ${minWidth || 'auto'};
    max-width: ${maxWidth || 'auto'};
    height: ${height || 'auto'};
    min-height: ${minHeight || 'auto'};
    max-height: ${maxHeight || 'auto'};
    overflow-x: ${overflowX || 'auto'};
    overflow-y: ${overflowY || 'auto'};
    margin: ${margin};
    padding: ${padding};
  `}
`;
