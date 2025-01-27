import styled from "styled-components";

export const WarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  right: ${(props) => props.right || "-10%"};

  div {
    cursor: pointer;
  }
`;

export const CatContainer = styled.div`
  position: relative;
  display: inline-block;

  div {
    position: absolute;
    top: 100%; // 이미지 아래에 뜨도록
    left: 50%;
    transform: translateX(-50%) !important;
    margin-top: 8px; // 이미지 ~ 말풍선 간격

    z-index: 999;
  }

  img {
    width: 4.2rem;
  }
`;
