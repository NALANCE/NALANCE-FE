import styled from "styled-components";

export const WarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  div {
    cursor: pointer;
  }
`;

export const WarningBox = styled.div`
  margin-right: 28px;

  position: relative;
  display: inline-block;

  div {
    position: absolute;
    top: 100%; // 이미지 아래에 뜨도록
    left: 80%;
    transform: translateX(-80%);
    margin-top: 16px; // 이미지 ~ 말풍선 간격

    z-index: 1000;
  }
`;
