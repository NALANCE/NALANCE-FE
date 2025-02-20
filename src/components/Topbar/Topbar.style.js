import styled from "styled-components";

export const TopIcons = styled.div`
  display: none; /* 기본적으로 숨김 */

  @media all and (min-width: 769px) and (orientation: landscape) {
    display: flex; /* 태블릿 가로 모드에서만 flex 적용 */
    justify-content: space-between;
    padding: 31px 51px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`;

export const Container = styled.div`
  width: 320px;
  margin: 0 auto;
`;

export const BackBtn = styled.button`
  position: absolute;
  top: clamp(2rem, 18.83vw, 6rem);

  background: none;
  border: none;

  cursor: pointer;

  img {
    width: 3rem;
  }
`;
