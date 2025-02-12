import styled from "styled-components";
import check from 'assets/icons/check.svg';

export const TopGap = styled.div`

@media all and (min-width: 769px) and (orientation: landscape) {
  height: 26px;
}

`

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

  @media all and (min-width: 769px) and (orientation: landscape) {
  margin-top: 54px;
  height: 480px;
  display: flex;               
  flex-direction: column;     
  justify-content: center; 
  align-items: center; 
}
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
  cursor: pointer;
  position: relative; /* 체크 표시 위치를 조정하기 위해 필요 */

  &:checked::after {
    content: "";
    position: absolute;
    top: 30%;
    left: 17%;
    width: 9.5px; /* 체크 아이콘 크기 */
    height: 7.07px; /* 체크 아이콘 크기 */
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Group'%3E%3Cpath id='Vector' fill-rule='evenodd' clip-rule='evenodd' d='M9.07801 0.967669C9.20271 1.0924 9.27275 1.26155 9.27275 1.43792C9.27275 1.61429 9.20271 1.78344 9.07801 1.90817L4.09261 6.89358C4.02672 6.95947 3.9485 7.01175 3.86241 7.04741C3.77633 7.08308 3.68406 7.10143 3.59087 7.10143C3.49769 7.10143 3.40542 7.08308 3.31933 7.04741C3.23324 7.01175 3.15502 6.95947 3.08914 6.89358L0.612176 4.41706C0.548649 4.3557 0.497978 4.28231 0.463119 4.20116C0.42826 4.12001 0.409911 4.03273 0.409144 3.94441C0.408376 3.8561 0.425205 3.76851 0.458649 3.68677C0.492093 3.60503 0.541481 3.53076 0.603932 3.46831C0.666383 3.40586 0.740647 3.35647 0.82239 3.32303C0.904132 3.28959 0.991717 3.27276 1.08003 3.27352C1.16835 3.27429 1.25563 3.29264 1.33678 3.3275C1.41793 3.36236 1.49132 3.41303 1.55268 3.47656L3.59065 5.51453L8.13707 0.967669C8.19884 0.905861 8.27218 0.856829 8.35291 0.823376C8.43363 0.789923 8.52016 0.772705 8.60754 0.772705C8.69492 0.772705 8.78145 0.789923 8.86217 0.823376C8.9429 0.856829 9.01624 0.905861 9.07801 0.967669Z' fill='black'/%3E%3C/g%3E%3C/svg%3E");
    background-size: cove
    background-repeat: no-repeat;
    background-position: center;

  }
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
