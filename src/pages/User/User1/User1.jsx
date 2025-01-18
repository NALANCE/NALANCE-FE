import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import PageTitle from "components/common/PageTitle/PageTitle";
import ControlBtn from "components/common/ControlBtn/ControlBtn";
import RoundBtn from "components/common/RoundBtn/RoundBtn";
import TriangleBtn from "../../../components/common/TriangleBtn/TriangleBtn";

import * as S from "./User1.style";

const User = {
  email: 'abc@naver.com',
  pw: 'Nalance123!!'
}

const User1 = () => {
      const [email, setEmail] = useState('');
      const [emailValid, setEmailValid] =useState(false);
      const [codesentValid, setCodeSentValid] = useState(false);
      const [pwValid, setPwValid] =useState(false);
      const [OPTValid, setOTPValid] = useState(false);
      const [checkpwValid, setcheckpwValid] = useState(false);

      const [OTP, setOTP] = useState('');
      const [pw, setPw] = useState('');
      const [checkpw, setCheckpw] = useState('');
  
      const [Allow, setAllow] = useState(false);
      const [errorEmailMessage, setErrorEmailMessage] = useState("");
      const [errorOTPMessage, setErrorOTPMessage] = useState("");
      const [errorPwMessage, setErrorPwMessage] = useState("");
      const [errorPwCheckMessage, setErrorPwCheckMessage] = useState("");
      const [errorMessage, setErrorMessage] = useState("");
      const [errorcheckbox, setErrorCheckbox] = useState("");
  
      const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex = /^(?=.*@)(?=.*\.).*$/;
        if (regex.test(email)){
            setEmailValid(true);
        }
        else{
            setEmailValid(false);
        }
    }

    const handleSendCode = (e) => {
      if(emailValid){
        setCodeSentValid(true);
        setErrorEmailMessage("인증번호가 전송되었습니다.");
      }
      else{
        setCodeSentValid(false);
        setErrorEmailMessage("잘못된 형식의 이메일입니다.");    
      }
    }
      const handleOTP = (e) => {
        setOTP(e.target.value);
      }
  
      const handlePw = (e) => {
        const inputValue = e.target.value;
        setPw(inputValue); 
        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
        if (regex.test(pw)){
            setPwValid(true);
        }
        else{
            setPwValid(false);
        }
        if (isValid) {
          setErrorPwMessage("비밀번호");
      } else {
          setErrorPwMessage("비밀번호는 영문자, 숫자, 특수문자를 포함하여야 합니다.");
      }
    }

      const handleCheckpw = (e) => {
        setCheckpw(e.target.value);
    }

    const handleOTPClick = () => {
      if(OPTValid){
        setErrorOTPMessage("인증번호가 확인되었습니다.");
      }
      else{
        setErrorOTPMessage("인증번호가 틀렸습니다.    ");
      }
    }

    const handleCheckbox = () => {
      setErrorCheckbox("다음 버튼이 눌렸다.");
    }

    useEffect (()=> {
      if(OTP == 'abc'){
        setOTPValid(true);
      }
      else{
        setOTPValid(false);
      }
    }
      
  )

      useEffect( ()=> {
        if (pwValid){
          setErrorPwMessage("");
            return;
        }
        setErrorPwMessage("비밀번호는 영문자, 숫자, 특수문자를 포함하여야 합니다.");
    }, [pw, pwValid]);

      useEffect( ()=> {
        if (pwValid && pw === checkpw){
          setErrorPwCheckMessage("비밀번호가 일치합니다.");
          setcheckpwValid(true);
            return;
        }
        setErrorPwCheckMessage("비밀번호가 일치하지 않습니다.");
        setcheckpwValid(false);
    }, [checkpw]);
  
      useEffect( ()=> {
          if (emailValid && pwValid && OPTValid && checkpwValid){
              setAllow(true);
              return;
          }
          setAllow(false);
      }, [email, pw]);
  

  return (
    <>
      <PageTitle pageTitle="회원가입" />

      <S.ContentWrap>
        <S.LineWrap>
          <S.InputWrap>
            <S.Input
                type="text"
                className = "input"
                placeholder = '이메일'
                value = {email}
                onChange = {handleEmail}/>
          </S.InputWrap>
          {/*<RoundBtn text="전송" width="68px" onClickConfirmButton={handleEmailClick} />*/}
          <ControlBtn
            text ={codesentValid ? "재전송" : "전송"}
            onClick = {handleSendCode}
            isDisabled = {!emailValid}
            status = {codesentValid ? "Inprogress" : "Idle"}
          />
        </S.LineWrap>
        
        
        <S.ErrorMessageWrap1>
            {errorEmailMessage}
        </S.ErrorMessageWrap1>
        

        <S.LineWrap>
          <S.InputWrap>
            <S.Input
                type="text"
                className = "input"
                placeholder = '인증번호'
                value = {OTP}
                onChange = {handleOTP}/>
          </S.InputWrap>
          <ControlBtn
            text = "확인"
            onClick={handleOTPClick}
            isDisabled={!codesentValid}
            status = {OPTValid ? "Completer" : "InProgress"}
          />
        </S.LineWrap>

        <S.ErrorMessageWrap1>
            {errorOTPMessage}
        </S.ErrorMessageWrap1>

        <S.LineWrap>
          <S.InputWrap>
            <S.Input 
                  type="password"
                  className = "input"
                  placeholder = '비밀번호'
                  value = {pw}
                  onChange = {handlePw}/>
          </S.InputWrap>
          <S.NoRoundBtn/>
        </S.LineWrap>

        <S.ErrorMessageWrap3>
            {errorPwMessage}
        </S.ErrorMessageWrap3>

        <S.LineWrap>
          <S.InputWrap>
            <S.Input 
                  type="password"
                  className = "input"
                  placeholder = '비밀번호 확인'
                  value = {checkpw}
                  onChange = {handleCheckpw}/>
          </S.InputWrap>
          <S.NoRoundBtn/>
        </S.LineWrap>

        <S.ErrorMessageWrap2>
            {errorPwCheckMessage}
        </S.ErrorMessageWrap2>

        <S.CheckboxWrap>

          <S.CheckboxInputWrap>
            <S.CheckboxInputRow>
              <S.Checkbox
                  type="checkbox"
                  id="check-age"
                  name="check-age"/>
                  <S.Option> 필수 </S.Option>
                  <S.Label for="check-age">'만 14세 이상입니다.'</S.Label>
            </S.CheckboxInputRow>

            <S.CheckboxInputRow>
              <S.Checkbox
                  type="checkbox"
                  id="opt-in-personal-info"
                  name="opt-in-personal-info"/>
                  <S.Option> 필수 </S.Option>
                  <S.Label for="opt-in-personal-info">'본 서비스의 이용약관과 개인정보 정책에 동의합니다.'</S.Label>
            </S.CheckboxInputRow>

            <S.CheckboxInputRow>
              <S.Checkbox
                  type="checkbox"
                  id="opt-in-marketing"
                  name="opt-in-marketing"/>
                  <S.Option> 선택 </S.Option>
                  <S.Label for="opt-in-marketing">'마케팅 정보 수신에 동의합니다.'</S.Label>
            </S.CheckboxInputRow>

          </S.CheckboxInputWrap>

          </S.CheckboxWrap>

          <S.ErrorMessageWrap3>
              {errorcheckbox}
          </S.ErrorMessageWrap3>

          <S.InputGap/>

          <TriangleBtn text="다음" link="/User2" Allow={Allow} onClick = {handleCheckbox}/>
      </S.ContentWrap>

      

      
    </>
  );
};

export default User1;
