import OnboardingLogo from "components/OnboardingLogo/OnboardingLogo";
import LoginBtn from "components/common/LoginBtn/LoginBtn";
import * as S from "./Onboarding.style";

import { Link } from "react-router-dom";
import RoundBtn from "../../components/common/RoundBtn/RoundBtn";

const Onboarding = () => {
  return (
    <>
      <S.OnboardingContainer>
        <OnboardingLogo />

        <S.BtnContainer>
          <LoginBtn text="로그인" link="/login" notAllow = "false"/>

          <LoginBtn text="회원가입" width="33vw" link="/user1" notAllow = "false" />
        </S.BtnContainer>
      </S.OnboardingContainer>
    </>
  );
};

export default Onboarding;
