import React from 'react';
import * as S from './BottomLogo.style';
import bottomLogo from 'assets/icons/bottomLogo.svg';

const BottomLogo = () => {
  return (
    <S.Container>
      <S.LogoImage src={bottomLogo} alt="Bottom Logo" />
    </S.Container>
  );
};

export default BottomLogo;
