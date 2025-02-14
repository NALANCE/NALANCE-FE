import styled from 'styled-components';

export const Container = styled.div`
  width: 352px;
  margin: 0 auto;

  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 20px;

  height: 630px;
  box-sizing: border-box;

  padding-top: clamp(10px, 130px, 130px);
`;

export const BottomLogoWrapper = styled.div`
  display: block; /* 기본적으로 보이게 설정 */

  @media all and (min-width: 769px) and (orientation: landscape) {
    display: none; /* 태블릿 가로 모드에서는 숨김 */
  }

  padding-bottom: 30px;
`;
