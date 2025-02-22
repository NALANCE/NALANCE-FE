import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: center;
  max-width: 425px; 
  margin: 0 auto;
  margin-top: 50px;
`;


export const CurrentEmailContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const CurrentEmail = styled.div`
  font-size: 14px;
  color: #333;
`;

export const HR = styled.hr`
  border: 0;
  height: 1px;
  margin-top: 20px;
  background-color: #ccc;
  width: 100%;
`;


export const InputContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font-size: 15px;
  color: #868686;
  font-weight: 500;
  height: 25px;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  &:focus {
    border-color: ${({ theme }) => theme.colors.b};
    outline: none;
  }
`;

export const DisabledInput = styled(Input)`
  background-color: #e9ecef;
  color: #6c757d;
`;

export const ErrorTextContainer = styled.div`
  display: flex;
  width: 75%;
  margin-top: 5px;
  height: 14px;
  text-align: left;
`;

export const ErrorText = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.error};
  margin: 0;
`;


export const ErrorInput = styled(Input)`
  border-color: ${({ theme }) => theme.colors.error};
`;




