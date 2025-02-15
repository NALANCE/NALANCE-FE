import styled from "styled-components";

export const WarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  right: ${(props) => props.$right || "-10%"};

  margin-top: ${(props) => (props.$isWarning ? "0px" : "2rem")};
  div {
    cursor: pointer;
  }
`;

export const ChatCatContainer = styled.div`
  @media all and (min-width: 769px) and (orientation: landscape) {
    width: 18.1rem;
  }

  > img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const CatContainer = styled.div`
  position: relative;
  display: inline-block;

  margin-top: 1rem;

  width: clamp(1.2rem, 10vw, 4.2rem);

  div {
    position: absolute;
    top: 100%; // 이미지 아래에 뜨도록
    left: 50%;
    transform: translateX(-50%) !important;
    margin-top: 8px; // 이미지 ~ 말풍선 간격

    z-index: 999;
  }

  @media all and (min-width: 769px) and (orientation: landscape) {
    width: ${(props) => (props.$monthly == false ? "9.2rem" : `clamp(1.2rem,10vw,4.2rem)`)};
  }

  > object {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
