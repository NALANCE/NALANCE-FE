import styled from "styled-components";
import checkbox_check from 'assets/icons/checkbox_check.svg';
import checkbox_uncheck from 'assets/icons/checkbox_uncheck.svg';
import check from 'assets/icons/check.svg';

export const ContentWrap = styled.div`
  display: flex;               
  flex-direction: column;     
  justify-content: center; 
  align-items: center;     
`;

export const CenterWrap = styled.div`
  margin-top: 80px;
  height: 480px;
  display: flex;               
  flex-direction: column;     
  justify-content: center; 
  align-items: center;  
`

export const LineWrap = styled.div`
  display: flex; /* 가로 정렬 활성화 */
  justify-content: center; /* 요소를 수평 가운데 정렬 */
  align-items: center; /* 요소를 수직 가운데 정렬 */
  gap: 13px;
  width: 100%;
  height: auto; 
`

export const InputWrap = styled.div`
  display: flex;
  width: 228px;
  height: 44px;
  padding: 2px 13px;
  align-items: center;
  
  border-radius: 8px;
  background: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 5px;

  &:focus-within{
    border: 1px solid #000000
  }
  border: ${({ hasError }) => (hasError ? "1px solid  #B3261E" : "1px solid transparent")};

  input[type="password"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  height: 17px;
  font-size: 14px;
  font-weight: 400;

  &::placeholder {
    color: #B6B6B6;
  }

`;

export const NoRoundBtn =  styled.div`
  border: none;
  width: 68px;
  height: 40px;
`

export const ErrorMessegeDiv = styled.div`
  display: flex;
  width: 314px;
  height: 27px;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
`

export const ErrorMessageWrap = styled.div`

  color: ${({ hasError }) => (hasError ? "#B3261E" : "#000000")};
  font-family: "Freesentation", sans-serif;
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.04em;
  margin-top: 7px;
`;

export const InputGap = styled.div`
  margin-bottom: 10px;
`
export const CheckboxWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 314px;
  height: 88px;
  margin-top: 15px;
  gap: 10px;
  padding: 2px 13px;
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 5px;
`

export const Checkbox = styled.input`
  appearance: none;
  width: 15px;
  height: 15px;
  border: 1px solid #545454;
  border-radius: 8px;
  margin-top: 9px;
  margin-right: 7px; /* Checkbox와 텍스트 사이의 간격 조정 */
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

   &:checked {
    border-color: #545454;;
    background-image: ${check};
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`
  
export const Option = styled.div`
  margin-top: 10px;
  margin-right: 11px;
  font-size: 12.5px;
  color: #545454;
`

export const Label = styled.label`
  margin-top: 10px;
  font-size: 12.5px;
`

export const CheckboxInputRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const CheckboxInputWrap = styled.div`
  margin-top: 2px;
  display: flex;
  flex-direction: column;
`
