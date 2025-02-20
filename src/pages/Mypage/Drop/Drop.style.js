import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  height: 630px;
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
  & > img:first-child {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
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

export const BottomLogoWrapper = styled.div`
  display: block; /* 기본적으로 보이게 설정 */

  @media all and (min-width: 769px) and (orientation: landscape) {
    display: none; /* 태블릿 가로 모드에서는 숨김 */
  }

  padding-bottom: 30px;
`;
