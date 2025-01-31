import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import PageTitle from "components/common/PageTitle/PageTitle";
import ControlBtn from "components/common/ControlBtn/ControlBtn";
import TriangleBtn from "../../../components/common/TriangleBtn/TriangleBtn";
import eva_eye_off from 'assets/icons/eva_eye_off.svg';
import eva_eye_on from 'assets/icons/eva_eye_on.svg';
import checkbox_check from 'assets/icons/checkbox_check.svg';
import checkbox_uncheck from 'assets/icons/checkbox_uncheck.svg';

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
      const [checkboxValid, setCheckboxValid] = useState(false);

      const [OTP, setOTP] = useState('');
      const [pw, setPw] = useState('');
      const [checkpw, setCheckpw] = useState('');
  
      const [Allow, setAllow] = useState(false);
      const [errorEmailMessage, setErrorEmailMessage] = useState("");
      const [errorOTPMessage, setErrorOTPMessage] = useState("");
      const [errorPwMessage, setErrorPwMessage] = useState("");
      const [errorPwCheckMessage, setErrorPwCheckMessage] = useState("");
      const [errorcheckbox, setErrorCheckbox] = useState("");

      const [ageCheck, setAgeCheck] = useState(false);
      const [useCheck, setUseCheck]= useState(false);
      const [marketingCheck, setMarketingCheck] = useState(false);

      const [emailTouched,setEmailTouched] = useState(false);
      const [OTPTouched, setOTPTouched] = useState(false);
      const [pwTouched, setPwTouched] = useState(false);
      const [pwcheckTouched, setPwCheckTouched] = useState(false);

      const [OTPClicked, setOTPClicked] = useState(false);
      const [showPassword, setShowPassword] = useState(false);
      const [checked, setChecked] = useState(false);

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

      const handleEmailBlur = () => {
        setEmailTouched(true);
        if(!emailValid){
          setErrorEmailMessage("잘못된 형식의 이메일입니다."); 
        }
        else{
          setErrorEmailMessage(""); 
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
        setErrorOTPMessage("");
      }

      const handleOTPBlur = () => {
        setOTPTouched(true);
      }
  
      const handlePw = (e) => {
        const inputValue = e.target.value;
        setPw(inputValue); 
        const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
        if (regex.test(inputValue)){
            setPwValid(true);
        }
        else{
            setPwValid(false);
        }
        if (isValid) {
          setErrorPwMessage("");
      } else {
          setErrorPwMessage("비밀번호는 영문자, 숫자, 특수문자를 포함하여야 합니다.");
      }
    }

    const handlePwBlur = () => {
      setPwTouched(true);
    }

      const handleCheckpw = (e) => {
        setCheckpw(e.target.value);
    }

    const handleCheckPwBlur = () => {
      setPwCheckTouched(true);
    }

    const handleOTPClick = () => {
      setOTPClicked(true);
      if(OTPTouched && OPTValid){
        setErrorOTPMessage("인증번호가 확인되었습니다.");
      }
      else{
        setErrorOTPMessage("인증번호가 틀렸습니다.    ");
      }
    }

    const ageBtnEvent=()=>{
      if(ageCheck === false){
        setAgeCheck(true)
      }
      else{
        setAgeCheck(false)
      }
    };

    const useBtnEvent=()=>{
      if(useCheck === false){
        setUseCheck(true)
      }
      else{
        setUseCheck(false)
      }
    };

    const marketingBtnEvent =()=>{
      if(marketingCheck === false){
        setMarketingCheck(true)
      }
      else{
        setMarketingCheck(false)
      }
    };

    useEffect (()=>{
      if(emailTouched&&!emailValid){
        setErrorEmailMessage("잘못된 형식의 이메일입니다.");
      }
      else{
        setErrorEmailMessage("");
      }

    }, [email])

    useEffect (()=> {
      if(OTP == 'abc'){
        setOTPValid(true);
      }
      else{
        setOTPValid(false);
      }
    }
  );
      useEffect( ()=> {
        if (pwTouched&& !pwValid){
          setErrorPwMessage("비밀번호는 영문자, 숫자, 특수문자를 포함하여야 합니다.");
        }
        else{
          setErrorPwMessage("");
        }
    }, [pw, pwValid]);

      useEffect( ()=> {
        if(pwcheckTouched){
          setErrorPwCheckMessage("비밀번호가 일치하지 않습니다.");
          if (pwValid && pw === checkpw){
          setErrorPwCheckMessage("비밀번호가 일치합니다.");
          setcheckpwValid(true);
          }
          else{
          setErrorPwCheckMessage("비밀번호가 일치하지 않습니다.");
          setcheckpwValid(false);
          }
        }
        else{
          setErrorPwCheckMessage("");
        }
    }, [checkpw, pwcheckTouched]);

    useEffect(()=>{
      if(ageCheck === true && useCheck === true){
        setCheckboxValid(true);
        setErrorCheckbox("");
      }
      else{
      setCheckboxValid(false);
      setErrorCheckbox("필수 항목 미동의시 가입이 불가능합니다.");
      }
    },[ageCheck, useCheck]);
  
      useEffect( ()=> {
          if (emailValid && pwValid && OPTValid && checkpwValid && checkboxValid){
              setAllow(true);
              return;
          }
          setAllow(false);
      }, [email, pw, OTP, checkpw, checkboxValid]);
  

    // 비밀번호 보이기/숨기기 토글
    const toggleShowPassword = () => {
      setShowPassword(!showPassword); // showPassword 상태 토글
    };
  
    const toggleCheckbox = () => {
      setChecked(!checked);
    };

  return (
    <>
      <PageTitle pageTitle="회원가입" />

      <S.ContentWrap>
      <S.CenterWrap>
        <S.LineWrap>
          <S.InputWrap hasError={emailTouched && !emailValid}>
            <S.Input
                type="text"
                className = "input"
                placeholder = '이메일'
                value = {email}
                onChange = {handleEmail}
                onBlur = {handleEmailBlur}/>
          </S.InputWrap>
          {/*<RoundBtn text="전송" width="68px" onClickConfirmButton={handleEmailClick} />*/}
          <ControlBtn
            text ={codesentValid ? "재전송" : "전송"}
            onClick = {handleSendCode}
            isDisabled = {!emailValid}
            status = {codesentValid ? "Inprogress" : "Idle"}
          />
        </S.LineWrap>
        
        <S.ErrorMessegeDiv>
        <S.ErrorMessageWrap hasError={emailTouched && !emailValid}>
            {errorEmailMessage}
        </S.ErrorMessageWrap>
        </S.ErrorMessegeDiv>
        

        <S.LineWrap>
          <S.InputWrap hasError={OTPClicked&&OTPTouched && !OPTValid}>
            <S.Input
                type="text"
                className = "input"
                placeholder = '인증번호'
                value = {OTP}
                onChange = {handleOTP}
                onBlur = {handleOTPBlur}/>
          </S.InputWrap>
          <ControlBtn
            text = "확인"
            onClick={handleOTPClick}
            isDisabled={!codesentValid}
            status = {OPTValid ? "Completer" : "InProgress"}
          />
        </S.LineWrap>

        <S.ErrorMessegeDiv>
        <S.ErrorMessageWrap hasError={OTPClicked&&OTPTouched && !OPTValid}>
            {errorOTPMessage}
        </S.ErrorMessageWrap>
        </S.ErrorMessegeDiv>

        <S.LineWrap>
          <S.InputWrap hasError={pwTouched && !pwValid}>
            <S.Input 
                  type={showPassword ? "text" : "password"}
                  className = "input"
                  placeholder = '비밀번호'
                  iconUrl={showPassword? {eva_eye_on}:{eva_eye_off}}
                  value = {pw}
                  onChange = {handlePw}
                  onBlur = {handlePwBlur}/>
            <img
                  src={showPassword ? eva_eye_on : eva_eye_off}
                  alt="eye icon"
                  onClick={toggleShowPassword}
                  style={{ cursor: "pointer" }} // 클릭 가능하도록 스타일 추가
             />
          </S.InputWrap>
          <S.NoRoundBtn/>
        </S.LineWrap>

        <S.ErrorMessegeDiv>
        <S.ErrorMessageWrap hasError={pwTouched && !pwValid}>
            {errorPwMessage}
        </S.ErrorMessageWrap>
        </S.ErrorMessegeDiv>

        <S.LineWrap>
          <S.InputWrap hasError={pwcheckTouched && !checkpwValid}>
            <S.Input 
                  type="password"
                  className = "input"
                  placeholder = '비밀번호 확인'
                  value = {checkpw}
                  onChange = {handleCheckpw}
                  onBlur = {handleCheckPwBlur}/>
          </S.InputWrap>
          <S.NoRoundBtn/>
        </S.LineWrap>

        <S.ErrorMessegeDiv>
        <S.ErrorMessageWrap hasError={pwcheckTouched && !checkpwValid}>
            {errorPwCheckMessage}
        </S.ErrorMessageWrap>
        </S.ErrorMessegeDiv>

        <S.CheckboxWrap>

          <S.CheckboxInputWrap>
            <S.CheckboxInputRow>
              <S.Checkbox
                  type="checkbox"
                  id="check-age"
                  name="check-age"
                  checked={ageCheck}
                  onChange={ageBtnEvent}/>
                  <S.Option> 필수 </S.Option>
                  <S.Label for="check-age">'만 14세 이상입니다.'</S.Label>
            </S.CheckboxInputRow>

            <S.CheckboxInputRow>
              <S.Checkbox
                  type="checkbox"
                  id="opt-in-personal-info"
                  name="opt-in-personal-info"
                  checked={useCheck}
                  onChange={useBtnEvent}/>
                  <S.Option> 필수 </S.Option>
                  <S.Label for="opt-in-personal-info">'본 서비스의 이용약관과 개인정보 정책에 동의합니다.'</S.Label>
            </S.CheckboxInputRow>

            <S.CheckboxInputRow>
              <S.Checkbox
                  type="checkbox"
                  id="opt-in-marketing"
                  name="opt-in-marketing"
                  checked={marketingCheck}
                  onChange={marketingBtnEvent}/>
                  <S.Option> 선택 </S.Option>
                  <S.Label for="opt-in-marketing">'마케팅 정보 수신에 동의합니다.'</S.Label>
            </S.CheckboxInputRow>

          </S.CheckboxInputWrap>

          </S.CheckboxWrap>

          <S.ErrorMessegeDiv>
          <S.ErrorMessageWrap hasError={!checkboxValid}>
              {errorcheckbox}
          </S.ErrorMessageWrap>
          </S.ErrorMessegeDiv>

          <S.InputGap/>
        </S.CenterWrap>

          <TriangleBtn text="다음" link="/User2" Allow={Allow} />
      </S.ContentWrap>

      

      
    </>
  );
};

export default User1;
