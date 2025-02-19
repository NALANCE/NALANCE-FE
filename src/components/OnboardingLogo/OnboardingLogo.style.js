import styled from "styled-components";
import { motion } from "framer-motion";

export const ChatContainer = styled.div`
  width: clamp(24.65rem, 70vw, 49.7rem);

  // 데스크탑 (가로 해상도가 1024px 보다 큰 화면에 적용)
  @media (min-width: 1024px) {
    // width: min(497px, 38.82vw);
  }
`;

export const ChatWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ChatImgWrapper = styled.div`
  width: clamp(8.1rem, 28.24vw, 17rem);

  object {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ChatImgWrapperLeft = styled(ChatImgWrapper)`
  width: clamp(8.1rem, 28.24vw, 17rem);
`;

export const ChatImgWrapperRight = styled(ChatImgWrapper)`
  width: clamp(8rem, 28.24vw, 19rem);

  @media all and (min-width: 769px) and (orientation: landscape) {
    margin-top: -1.8rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  width: clamp(20rem, 60.81vw, 31rem);

  margin-top: 3vh;

  > object {
    width: 100%;
    height: auto;
    object-fit: contain;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const CatWrapper = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FishWrapper = styled(motion.div)`
  margin-left: 50px;

  width: clamp(10.3rem, 36.38vw, 14.3rem);

  background: none !important;
  background-color: transparent !important;
  will-change: background;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CatImgWrapper = styled.div`
  width: clamp(20rem, 60.81vw, 24rem);
  height: auto;

  > object {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
