import styled from "styled-components";

export const Button = styled.button`
  border-radius: 40px;
  border: none;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  font-weight: 600;
  font-size: 20px;
  width: clamp(153px, 20vw, 200px); /* 고정된 크기 */
  height: clamp(77px, 7vw, 70px); /* 고정된 크기 */
  padding: 10px 16px;
  color: ${({ theme }) => (theme.colors.white)};
  background-color: ${({ disabled, theme }) => (disabled ? theme.colors.btnLight : theme.colors.btnDark)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  margin-top: ${({ marginTop }) => marginTop || "0px"};
  &:hover {
    background-color: ${({ disabled, theme }) => (disabled ? theme.colors.Light : theme.colors.btnDark)};
  }
`;
