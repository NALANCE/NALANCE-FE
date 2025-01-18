import styled from "styled-components";

export const PercentageWrapper = styled.div`
  position: relative;

  width: 100px; // 이미지 크기
  height: 100px;
`;

export const PercetageP = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  margin: 0;
`;
