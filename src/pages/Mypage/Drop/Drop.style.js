import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 170px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 11px;
`;

export const Cat = styled.img`
  width: 80px;
  height: 73.125px;
  flex-shrink: 0;
`;

export const Bubble = styled.div`
  position: relative;
  width: 269px;
  height: 323px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Speech = styled.img`
  position: absolute;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  width: 196px;
  height: 216px;
`;

export const BtnWrapper = styled.div`
  position: fixed;
  bottom: clamp(50px, 10%, 318px);
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    bottom: 318px;
  }

  @media (max-width: 480px) {
    bottom: 159px;
  }
`;
