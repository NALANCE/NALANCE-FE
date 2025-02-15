import styled from 'styled-components';

export const MainContainer = styled.div`
  height : 784px;
`

// 최상위 컴포넌트 ( 타이틀 + 로고 제외 )
export const Container = styled.div`
  height: 630px;
  box-sizing: border-box;
`;

export const ContentWrap = styled.div`
  padding-top: 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media all and (min-width: 769px) and (orientation: landscape){
  padding-top: 142px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

export const InputTitle = styled.div`
  display: flex;
  width: 66px;
  height: 15px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;

  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.4px;
  margin-bottom: 1px;

  transform: translateX(-107px);
`;

export const InputWrap = styled.div`
  display: flex;
  width: 254px;
  height: 44px;
  padding: 2px 13px;
  align-items: center;

  border-radius: 8px;
  background: white;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 5px;
`;

export const InputGap = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  height: 17px;
  font-size: 14px;
  font-weight: 400;

  &::placeholder {
    color: #b6b6b6;
  }
`;

export const ErrorMessageWrap = styled.div`
  color: ${({ hasError }) => (hasError ? "#B3261E" : "white")};
  font-family: "Freesentation", sans-serif;
  font-size: 11px;
  font-weight: 200px;
  letter-spacing: 0.04em;
  margin-top: 3px;
  
  transform: translateX(-49px);
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 53px;

  & > :nth-child(2) {
    margin-top: 8px;
  }
`;

export const BottomGap = styled.div`
  margin-bottom: 260px;

  @media all and (min-width: 769px) and (orientation: landscape){
  margin-bottom: 205px;
}
`;
