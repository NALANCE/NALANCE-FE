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
  width: 270px;
  padding: 20px 0px;
  gap: 30px;

  margin-left: auto;
  margin-right: auto;

  /* 스크롤바 설정 */
  max-height: 350px; /* 카테고리 목록의 최대 높이 */
  overflow-y: auto; /* 스크롤 활성화 */

  /* 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
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
