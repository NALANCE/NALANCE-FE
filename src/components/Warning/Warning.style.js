import styled from "styled-components";

export const WarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  left: 20%;

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
    transform: translateX(-50%);
    margin-top: 8px; // 이미지 ~ 말풍선 간격

    z-index: 1000;
  }
`;
