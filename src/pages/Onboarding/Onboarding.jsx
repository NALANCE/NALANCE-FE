import OnboardingLogo from "components/OnboardingLogo/OnboardingLogo";
import LoginBtn from "components/common/LoginBtn/LoginBtn";
import * as S from "./Onboarding.style";

import PCBgr from "components/PCBgr/PCBgr";

const Onboarding = () => {
  return (
    <>
      <S.OnboardingContainer>
        {/* 컴퓨터 비율  */}
        <PCBgr />

        <OnboardingLogo />

        <S.BtnContainer>
          <LoginBtn text="로그인" link="/login" notAllow={false} onClickConfirmButton={() => {}} />

          <LoginBtn text="회원가입" width="33vw" link="/user1" notAllow={false} onClickConfirmButton={() => {}} />
        </S.BtnContainer>
      </S.OnboardingContainer>
    </>
  );
};

export default Onboarding;
