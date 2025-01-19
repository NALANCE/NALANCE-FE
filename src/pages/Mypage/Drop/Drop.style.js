import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  height: clamp(520px, 100vh, 630px);
  box-sizing: border-box;

  padding-top: clamp(10px, 56px, 56px);
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: clamp(10px, 24px, 24px);
`;
