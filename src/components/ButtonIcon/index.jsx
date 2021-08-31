import React from 'react';
import * as S from './styles';

function ButtonIcon({
  className,
  color = 'primary',
  fontSize = '14px',
  children,
  onClick,
  icon,
}) {
  return (
    <S.Button className={className} onClick={onClick} color={color}>
      <S.Icon src={icon} fontSize={fontSize} alt="button icon" />
      <S.Text fontSize={fontSize}>{children}</S.Text>
    </S.Button>
  );
}

export default ButtonIcon;
