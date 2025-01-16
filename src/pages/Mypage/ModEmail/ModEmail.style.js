import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const DisabledInput = styled(Input)`
  background-color: #e9ecef;
  color: #6c757d;
`;

export const Button = styled.button`
  padding: 10px 16px;
  font-size: 14px;
  color: white;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#0056b3")};
  }
`;

export const ErrorText = styled.p`
  font-size: 12px;
  color: red;
  margin: 0;
`;

export const HR = styled.hr`
  border: 0;
  height: 1px;
  background-color: #ccc;
  margin: 16px 0;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
