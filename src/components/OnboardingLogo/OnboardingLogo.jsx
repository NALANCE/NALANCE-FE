import onboarding1 from "assets/icons/onboarding1.svg";
import onboarding2 from "assets/icons/onboarding2.svg";
import onboarding_logo from "assets/icons/onboarding_logo.svg";
import onboarding_cat from "assets/icons/onboarding_cat.svg";
import onboarding_fish from "assets/icons/onboarding_fish.svg";

import * as S from "./OnboardingLogo.style";

import { motion } from "framer-motion";

const OnboardingLogo = () => {
  return (
    <S.LogoContainer>
      {/* 말풍선 */}
      <S.ChatContainer>
        <S.ChatImgWrapper>
          <img src={onboarding1} />
        </S.ChatImgWrapper>
        <S.ChatWrapper>
          <S.ChatImgWrapper>
            <img src={onboarding2} />
          </S.ChatImgWrapper>
        </S.ChatWrapper>
      </S.ChatContainer>

      {/* 로고 */}
      <S.LogoWrapper>
        <img src={onboarding_logo} />
      </S.LogoWrapper>

      <S.CatWrapper>
        <S.FishWrapper
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
          transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100, damping: 20 }}
        >
          <img src={onboarding_fish} />
        </S.FishWrapper>

        <S.CatImgWrapper>
          <img src={onboarding_cat} />
        </S.CatImgWrapper>
      </S.CatWrapper>
    </S.LogoContainer>
  );
};

export default OnboardingLogo;
