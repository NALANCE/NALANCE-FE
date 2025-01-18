import styled from 'styled-components';

export const DBtn = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 153px;
    height: 77px;
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  &:active img {
    transform: scale(0.95);
  }

  -webkit-tap-highlight-color: transparent; /* 모바일 클릭 시 배경 하이라이트 제거 */
`;
