import styled from "styled-components";

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
