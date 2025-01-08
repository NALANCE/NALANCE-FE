import styled from "styled-components";

export const RBtn = styled.button`
  border: none;
  border-radius: 19px;

  background: ${({ "data-clicked": clicked, theme }) => (clicked ? theme.colors.btnDark : theme.colors.grayD6)};
  color: ${({ theme }) => theme.colors.white};

  font-family: "Freesentation", sans-serif;
  font-weight: 500;
  font-size: 1.5rem;

  width: ${({ width }) => `clamp(60px,${width},68px)`};
  height: 40px;

  cursor: pointer;

  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.btnDark};
  }
`;
