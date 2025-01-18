import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  width: 68px;
  height: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 19px;
  border: none;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  background: ${({ 'data-clicked': clicked, theme }) =>
    clicked ? theme.colors.btnDark : theme.colors.btnLight};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  font-weight: 500;
  font-size: 15px;
  line-height: 40px;
  letter-spacing: 0.64px;
  text-align: center;

  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.btnDark};
  }
`;
