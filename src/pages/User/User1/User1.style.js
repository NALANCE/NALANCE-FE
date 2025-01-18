import styled from "styled-components";
import RoundBtn from "../../../components/common/RoundBtn/RoundBtn";


export const ContentWrap = styled.div`
  margin-top: 104px;
  display: flex;               
  flex-direction: column;     
  justify-content: center; 
  align-items: center;     
`;

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
    outline: 0.5px solid #000000
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


export const ErrorMessageWrap1 = styled.div`

  color: #00000;
  font-family: "Freesentation", sans-serif;
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.04em;
  margin-top: 6px;
  margin-bottom: 7px;
  margin-left: 10px;
  transform: translateX(-35px);
`;

export const ErrorMessageWrap2 = styled.div`

  color: #00000;
  font-family: "Freesentation", sans-serif;
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.04em;
  margin-top: 6px;
  margin-bottom: 7px;
  margin-right: 80px;
  transform: translateX(-35px);
`;

export const ErrorMessageWrap3 = styled.div`

  color: #B3261E;
  font-family: "Freesentation", sans-serif;
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.04em;
  margin-top: 6px;
  margin-bottom: 7px;
  margin-right: 30px;
  transform: translateX(-35px);
`;

export const InputGap = styled.div`
  margin-bottom: 31px;
`
export const CheckboxWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 314px;
  height: 88px;
  margin-top: 23px;
  gap: 10px;
  padding: 2px 13px;
  
  border-radius: 8px;
  background: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 5px;
`

export const Checkbox = styled.input`
  margin-top: 10px;
  margin-right: 7px; /* Checkbox와 텍스트 사이의 간격 조정 */
  
`;

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
