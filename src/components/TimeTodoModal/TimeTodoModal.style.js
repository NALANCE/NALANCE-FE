import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 320px;
  height: 150.272px;
  text-align: center;
  display: flex;
  flex-direction: column;
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
  position: absolute;
  top: 0;
  width: 290px;
  height: 136.383px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 11px;
  margin-top: 15px;
  margin-bottom: 7px;
`;

