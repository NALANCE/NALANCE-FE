import styled, { keyframes } from "styled-components";

// 아래에서 위로 슬라이드 애니메이션
const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1001;
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 80%;
  max-width: 400px;
  min-height: 00px; /* 최소 높이를 더 높게 설정 */
  text-align: center;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 20px 20px 0px 0px;
  padding: 22px 48px 90px;
  animation: ${slideUp} 0.3s ease-in-out;
`;

export const SvgWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    width: 100%;
    height: auto;
  }
`;

export const ModalContent = styled.div`
  position: relative; /* absolute 대신 relative로 변경 */
  width: 100%;
  min-height: 200px; /* 최소 높이를 확보 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px; /* 패딩 추가 */
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 30px;
  width: 100%; /* 전체 너비 사용 */
`;

export const TimeTitle = styled.h3`
  font-size: 16px;
  width: 40%;
`;

export const TimeInputWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 35px;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
    width: 170px;
    height: auto;
  }

  input {
    position: relative;
    z-index: 1;
  }
`;

export const Input = styled.input`
  width: 60px; /* 너비를 줄임 */
  border: none;
  background: none;
  font-size: 30px;
  text-align: center;
  &:focus {
    outline: none; /* 기본 outline 제거 */
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 11px;
  margin-top: 15px;
  margin-bottom: 7px;
`;
