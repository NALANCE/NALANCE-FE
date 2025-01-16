import styled from "styled-components";

export const Button = styled.button`
  border-radius: 26px;
  border: none;

    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);

  font-family: "Freesentation", sans-serif;
  font-weight: 600;
  font-size: 15px;
  

  width: ${({ width }) => (width ? `clamp(7vw,${width},131px)` : `clamp(6vw,29vw,115px)`)};
  height: 50px;

  padding: 10px 16px;

  color: ${({ disabled,theme }) => disabled ? theme.colors.black: theme.colors.white};

  background-color: ${({ disabled, theme }) => (disabled ? theme.colors.btnLight : theme.colors.btnDark)};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${({ disabled, theme }) => (disabled ? theme.colors.Light : theme.colors.btnDark)};
    
  }
`;
