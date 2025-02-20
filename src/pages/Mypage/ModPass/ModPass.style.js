import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  align-items: center;
  max-width: 425px;
  margin: 0 auto;
  margin-top: 111px;
`;

export const InputContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 75%;
  display: flex;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font-size: 15px;
  height: 25px;
  color: #868686;
  border: 1px solid #E5E5E5;
  font-weight: 500;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  &:focus {
    border-color: ${({ hasError, theme }) => (hasError ? theme.colors.error : theme.colors.b)};
    outline: none;
  }
`;

export const PassEyeIcon = styled.img`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) ${({ isFlipped }) => (isFlipped ? "scaleY(-1)" : "scaleY(1)")};
  cursor: pointer;
`;

export const ErrorTextContainer = styled.div`
  display: flex;
  width: 70%;
  margin-top: 5px;
  height: 14px;
  text-align: left;
`;

export const ErrorText = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.error};
  margin: 0;
`;

