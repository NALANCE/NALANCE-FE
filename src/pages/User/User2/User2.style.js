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

// 부모 컨테이너 (모든 요소 포함)
export const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 560px;
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 100px;
  width: 270px;

  gap: 30px;

  margin-left: auto;
  margin-right: auto;

  /* 스크롤바 설정 */
  max-height: 320px; /* 카테고리 목록의 최대 높이 */
  overflow-y: auto; /* 스크롤 활성화 */

  /* 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

// 버튼 컨테이너와 고양이를 감싸는 최상위 컨테이너
export const WarningAndButtonWrapper = styled.div`
  display: flex; /* 버튼 컨테이너와 고양이를 가로로 배치 */
  align-items: center;
  justify-content: space-between;
  margin: auto; /* 전체 컨테이너를 중앙 정렬 */
  width: 270px;
  margin-top: 22px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

export const TriangleBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  width: 100%;
`;
