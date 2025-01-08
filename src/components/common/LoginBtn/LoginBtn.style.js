import styled from "styled-components";

export const LBtn = styled.button`
  border: 0.3px solid ${({ theme }) => theme.colors.black};
  border-radius: 26px;

  background: ${({ "data-clicked": clicked, theme }) => (clicked ? theme.colors.btnDark : theme.colors.white)};
  color: ${({ "data-clicked": clicked, theme }) => (clicked ? theme.colors.white : theme.colors.black)};

  font-family: "Freesentation", sans-serif;
  font-weight: 600;
  font-size: 2rem;

  width: ${({ width }) => (width ? `clamp(7vw,${width},131px)` : `clamp(6vw,29vw,115px)`)};
  height: 50px;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.btnDark};
    color: ${({ theme }) => theme.colors.white};
  }
`;
