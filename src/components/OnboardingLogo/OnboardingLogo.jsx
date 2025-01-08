import onboarding1 from "assets/icons/onboarding1.svg";
import onboarding2 from "assets/icons/onboarding2.svg";
import onboarding_logo from "assets/icons/onboarding_logo.svg";
import onboarding_cat from "assets/icons/onboarding_cat.svg";

import * as S from "./OnboardingLogo.style";

import { Link } from "react-router-dom";

const OnboardingLogo = () => {
  return (
    <S.LogoContainer>
      {/* 말풍선 */}
      <S.ChatContainer>
        <div>
          <img src={onboarding1} />
        </div>
        <S.ChatWrapper>
          <img src={onboarding2} />
        </S.ChatWrapper>
      </S.ChatContainer>

      {/* 로고 */}
      <S.LogoWrapper>
        <img src={onboarding_logo} />
      </S.LogoWrapper>
      <S.CatWrapper>
        <img src={onboarding_cat} />
      </S.CatWrapper>
    </S.LogoContainer>
  );
};

export default OnboardingLogo;
