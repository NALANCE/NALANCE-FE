import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 20;
  width: 100%;
  padding-bottom: 10px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 80px;
  height: 40px;
  width: 100px;
  min-width: 2px;
  padding: 0px 13px;
  gap: 6px;
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
  border: 0.3px solid var(--category_outline, #6f6f6f);
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  transition: width 0.2s ease;
  box-sizing: border-box;

  overflow: hidden; /* 내용 초과 방지 */
  white-space: nowrap; /* 공백 처리 */
`;

export const ArrowIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
`;

export const DisplayText = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
`;

export const AddIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;
