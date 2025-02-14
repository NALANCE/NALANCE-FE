import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  height: 630px;
  box-sizing: border-box;

  padding-top: clamp(10px, 130px, 130px);
`;

export const Cat = styled.img`
  width: 80px;
  height: 73.125px;
  flex-shrink: 0;
`;

export const Speech = styled.img`
  width: 269px;
  height: 122.951px;
`;

export const BottomLogoWrapper = styled.div`
  display: block; /* 기본적으로 보이게 설정 */

  @media all and (min-width: 769px) and (orientation: landscape) {
    display: none; /* 태블릿 가로 모드에서는 숨김 */
  }
`;
