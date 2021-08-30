import React from 'react';
import * as S from './styles';

function Button({
  className,
  color = 'primary',
  size = 'default',
  fullWidth = false,
  children,
  onClick,
  width,
  loading,
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
      height={height[size]}
      fullWidth={fullWidth}
      width={width}
      loading={loading}
    >
      {children}
    </S.Button>
  );
}

export default Button;
