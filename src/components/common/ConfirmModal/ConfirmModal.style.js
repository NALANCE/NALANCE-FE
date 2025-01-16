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
`;

export const SvgWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
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

export const ModalText = styled.div`
  display: flex;
  width: 229px;
  height: 44px;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.black};

  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  letter-spacing: 1.2px;
  padding: 10px 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;
`;
