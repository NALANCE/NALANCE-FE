import OnboardingLogo from "components/OnboardingLogo/OnboardingLogo";
import LoginBtn from "components/common/LoginBtn/LoginBtn";
import * as S from "./Onboarding.style";

import bgr1 from "assets/icons/icon_bgr1.svg";
import bgr2 from "assets/icons/icon_bgr2.svg";
import bgr3 from "assets/icons/icon_bgr3.svg";
import bgr4 from "assets/icons/icon_bgr4.svg";
import bgr5 from "assets/icons/icon_bgr5.svg";
import bgr6 from "assets/icons/icon_bgr6.svg";
import bgr7 from "assets/icons/icon_bgr7.svg";

const Onboarding = () => {
  return (
    <>
      <S.OnboardingContainer>
        {/* 컴퓨터 비율  */}

        <S.BgrWrapper src={bgr1} $top={"33.7%"} $left={"7.1%"} />
        <S.BgrWrapper src={bgr2} $top={"36.2%"} $left={"12.2%"} />
        <S.BgrWrapper src={bgr3} $top={"26%"} $left={"18.9%"} />
        <S.BgrWrapper src={bgr4} $top={"35%"} $left={"24.8%"} />
        <S.BgrWrapper src={bgr5} $top={"36.2%"} $left={"71.8%"} />
        <S.BgrWrapper src={bgr6} $top={"26.8%"} $left={"77.57%"} />
        <S.BgrWrapper src={bgr7} $top={"28.4%"} $left={"84.45%"} />

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
