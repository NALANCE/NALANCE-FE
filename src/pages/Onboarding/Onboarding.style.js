import styled from "styled-components";
import img from "assets/img/bgr.png";

export const OnboardingContainer = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0px 58px;

  height: 100dvh;

  position: relative;
`;

export const BgrWrapper = styled.img`
  display: none;
  position: absolute;
  top: ${(props) => props.$top || "auto"};
  left: ${(props) => props.$left || "auto"};

  // 데스크탑 (가로 해상도가 1024px 보다 큰 화면에 적용)
  @media all and (min-width: 769px) and (orientation: landscape) {
    display: block;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > :nth-child(2) {
    margin-top: 8px;
  }
`;
