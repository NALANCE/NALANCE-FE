import Topbar from 'components/Topbar/Topbar';
import BottomLogo from 'components/BottomLogo/BottomLogo';
import cat from 'assets/icons/ask_cat.svg';
import speech from 'assets/icons/ask_speech.svg';
import * as S from './Ask.style';

const Ask = () => {
  return (
    <>
      <Topbar pageTitle="문의하기" />
      <S.Container>
        <S.Cat src={cat} alt="고양이" />
        <S.Speech src={speech} alt="말풍선" />
      </S.Container>
      <BottomLogo />
    </>
  );
};

export default Ask;
