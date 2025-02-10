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
        <S.ChatImgWrapperLeft>
          <object data={onboarding1} type="image/svg+xml">
            <img src={onboarding1} />
          </object>
        </S.ChatImgWrapperLeft>
        <S.ChatWrapper>
          <S.ChatImgWrapperRight>
            <object data={onboarding2} type="image/svg+xml">
              <img src={onboarding2} />
            </object>
          </S.ChatImgWrapperRight>
        </S.ChatWrapper>
      </S.ChatContainer>

      {/* 로고 */}
      <S.LogoWrapper>
        <object data={onboarding_logo} type="image/svg+xml">
          <img src={onboarding_logo} />
        </object>
      </S.LogoWrapper>

      <S.CatWrapper>
        <S.FishWrapper
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotateZ: 360 }}
          transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 100, damping: 20 }}
        >
          <object data={onboarding_fish} type="image/svg+xml">
            <img src={onboarding_fish} />
          </object>
        </S.FishWrapper>

        <S.CatImgWrapper>
          <object data={onboarding_cat} type="image/svg+xml">
            <img src={onboarding_cat} />
          </object>
        </S.CatImgWrapper>
      </S.CatWrapper>
    </S.LogoContainer>
  );
};

export default OnboardingLogo;
