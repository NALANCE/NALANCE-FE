import styled, { keyframes } from 'styled-components';

export const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: background 0.3s ease, opacity 0.3s ease;

  img {
    width: 100%;
    height: auto;

    object-fit: contain;
  }

  &:active {
    transform: scale(0.95);
  }
`;
