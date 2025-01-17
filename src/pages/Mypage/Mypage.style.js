import styled from "styled-components";

export const Container = styled.div`
  display: inline-block; /* 자식 요소의 크기에 맞춰 변화 */
  flex-direction: column;
  align-items: left;
  padding: 20px;
  margin-top: 70px;
  margin-left: 40px;
`;

export const LinkText = styled.p`
  margin: 20px 0;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.btnDark};
  &:hover {
    color: ${({ theme }) => theme.colors.btnLight};
  }
`;
