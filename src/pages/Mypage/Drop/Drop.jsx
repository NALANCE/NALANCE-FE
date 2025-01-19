import React from 'react';
import Topbar from 'components/Topbar/Topbar';
import BottomLogo from 'components/BottomLogo/BottomLogo';
import DropBtn from 'components/DropBtn/DropBtn';
import cat from 'assets/icons/drop_cat.svg';
import bubble from 'assets/icons/drop_bubble.svg';
import speech from 'assets/icons/drop_speech.svg';
import * as S from './Drop.style';

const Drop = () => {
  return (
    <>
      <Topbar pageTitle="회원탈퇴" />
      <S.Container>
        <S.Cat src={cat} alt="고양이" />
        <S.Bubble>
          <img src={bubble} alt="말풍선" />
          <S.Speech src={speech} alt="대사" />
        </S.Bubble>
        <S.BtnWrapper>
          <DropBtn link="/" />
        </S.BtnWrapper>
      </S.Container>

      <BottomLogo />
    </>
  );
};

export default Drop;
