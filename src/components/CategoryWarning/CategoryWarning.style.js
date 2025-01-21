import styled from "styled-components";

export const WarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  right: -10%;
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
    top: 90%; // 이미지 아래에 뜨도록
    left: 85%;
    transform: translateX(-85%) !important;
    margin-top: 16px; // 이미지 ~ 말풍선 간격

    z-index: 1000;
  }
`;
