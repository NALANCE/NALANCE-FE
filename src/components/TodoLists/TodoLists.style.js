import styled, { css } from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`;

export const TodoText = styled.span`
  font-size: 16px;
  width: 100%;
  padding: 2px; /* 내부 여백 추가 */
  box-sizing: border-box; /* 패딩 포함 크기 계산 */
  border: 0px solid transparent; /* 선택 시 보더가 튀지 않게 */
  border-bottom: 1px solid ${({ theme }) => theme.colors.bordergray};
  
  &:focus {
    outline: none; /* 기본 outline 제거 */
  }
`;

export const Time = styled.span`
  font-size: 16px;
  padding: 2px;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bordergray};
  width: 20%;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.error};
  margin-top: 5px;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
`;
