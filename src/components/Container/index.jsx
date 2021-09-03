import React from 'react';
import * as S from './styles';

function Container({
  children,
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
  palette,
  color,
}) {
  return (
    <S.Container
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      wrap={wrap}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      height={height}
      minHeight={minHeight}
      maxHeight={maxHeight}
      overflowX={overflowX}
      overflowY={overflowY}
      margin={margin}
      padding={padding}
      palette={palette}
      color={color}
    >
      {children}
    </S.Container>
  );
}

export default Container;
