import React from 'react';
import * as S from './styles';

function Button({
  className,
  color = 'light',
  backgroundColor = 'primary',
  size = 'default',
  fullWidth = false,
  children,
  onClick,
}) {
  const height = {
    default: '50px',
    small: '48px',
  };

  return (
    <S.Button
      className={className}
      onClick={onClick}
      color={color}
      backgroundColor={backgroundColor}
      height={height[size]}
      fullWidth={fullWidth}
    >
      {children}
    </S.Button>
  );
}

export default Button;
