import React from 'react';
import * as S from './styles';

function ButtonIcon({
  className,
  color = 'primary',
  fontSize = '14px',
  children,
  onClick,
  icon,
  margin,
  warningId,
}) {
  return (
    <S.Button
      className={className}
      onClick={onClick}
      color={color}
      margin={margin}
      warningId={warningId}
    >
      <S.Icon
        src={icon}
        fontSize={fontSize}
        warningId={warningId}
        alt="button icon"
      />
      <S.Text fontSize={fontSize} warningId={warningId}>
        {children}
      </S.Text>
    </S.Button>
  );
}

export default ButtonIcon;
