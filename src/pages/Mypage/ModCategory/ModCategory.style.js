import styled, { keyframes } from 'styled-components';

// 애니메이션
const shake = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  25% { transform: translate(-1px); }
  50% { transform: translate(1px); }
  75% { transform: translate(-1px); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 104px;
  width: 310px;
  padding: 20px 0px;
  gap: 16px;

  margin-left: auto;
  margin-right: auto;

  /* 스크롤바 설정 */
  max-height: 320px; /* 카테고리 목록의 최대 높이 */
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 14px;
  width: 270px;

  margin-left: auto;
  margin-right: auto;
`;

export const ErrorMessage = styled.div`
  color: #b3261e;
  font-size: 11px;
  font-style: normal;
  font-weight: 410;
  line-height: 16px;
  letter-spacing: 0.44px;
  text-align: left;
  margin-top: 6px;

  &.shake {
    animation: ${shake} 0.4s ease-in-out;
  }
`;
export const CategoryRow = styled.div`
  display: flex;
  gap: 13px;
`;

export const DragHandle = styled.img`
  width: 11px;
  height: 9.778px;
  flex-shrink: 0;
  cursor: grab;
  padding-top: 16px;
`;
