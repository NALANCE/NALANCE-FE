import styled, { keyframes } from 'styled-components';

// 아래에서 위로 슬라이드 애니메이션
const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  width: 80%;
  max-width: 400px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px 20px 0px 0px;
  padding: 22px 48px 90px;
  animation: ${slideUp} 0.3s ease-out;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 770;
  line-height: 40px; /* 133.333% */
  letter-spacing: 1.2px;

  padding-bottom: 10px;
`;

export const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 20px;
`;

export const ColorBox = styled.div`
  width: 55px;
  height: 56px;
  flex-shrink: 0;
  background-color: ${({ color }) => color};
  border-radius: 10px;
  cursor: pointer;
  border: ${({ isSelected }) => (isSelected ? '1px solid black' : 'none')};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  }
`;
