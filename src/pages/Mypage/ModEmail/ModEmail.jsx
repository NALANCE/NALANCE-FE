import React, { useState } from "react";
import emailValidator from "email-validator";
import Topbar from "components/Topbar/Topbar";
import ChangeCompleteBtn from "components/common/ChangeCompleteBtn/ChangeCompleteBtn";
import originalCat from "assets/icons/originalCat.svg";
import * as S from "./ModEmail.style";

const ModEmail = () => {
  const [currentEmail, setCurrentEmail] = useState("example@gmail.com");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [errorMessage1, setErrorMessage1] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendCode = () => {
    if (email === currentEmail) {
      setErrorMessage1("기존의 이메일과 동일합니다.");
      return;
    }
    if (!emailValidator.validate(email)) {
      setErrorMessage1("잘못된 형식의 이메일입니다.");
      return;
    }
    setErrorMessage1("");
    setIsCodeSent(true);
    // TODO: Add API call to send verification code
    console.log("인증번호 전송됨:", email);
  };

  const handleVerifyCode = () => {
    if (verificationCode !== "123456") {
      setErrorMessage2("인증번호가 일치하지 않습니다.");
      return;
    }
    setErrorMessage2("");
    setIsVerified(true);
    // TODO: Add API call to update the email
  };

  const isVerificationCodeValid = (code) => {
    const regex = /^[A-Za-z0-9]{6}$/;
    return regex.test(code);
  };

  const handleChangeComplete = () => {
    alert("이메일 변경이 완료되었습니다.");
    // TODO: Add API call to finalize the email change
  };

  return (
    <>
      <Topbar pageTitle="이메일 수정" />
      <S.Container>
        <S.CurrentEmailContainer>
          <S.Icon src={originalCat} alt="Icon" />
          <S.CurrentEmail>{currentEmail}</S.CurrentEmail>
        </S.CurrentEmailContainer>
        <S.HR />
        <S.InputContainer>
          <S.Input
            as={errorMessage1 ? S.ErrorInput : S.Input}
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="새 이메일을 입력하세요"
          />
          <S.Button onClick={handleSendCode} disabled={!email}>
            {isCodeSent ? "재전송" : "전송"}
          </S.Button>
        </S.InputContainer>
        <S.ErrorTextContainer>
          {errorMessage1 && <S.ErrorText>{errorMessage1}</S.ErrorText>}
        </S.ErrorTextContainer>
        <S.InputContainer>
          <S.Input
            as={errorMessage2 ? S.ErrorInput : S.Input}
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="인증번호를 입력하세요"
          />
          <S.Button onClick={handleVerifyCode} disabled={!isCodeSent || !isVerificationCodeValid(verificationCode)}>
            확인
          </S.Button>
        </S.InputContainer>
        <S.ErrorTextContainer>
          {errorMessage2 && <S.ErrorText>{errorMessage2}</S.ErrorText>}
        </S.ErrorTextContainer>
        <ChangeCompleteBtn
          onClick={handleChangeComplete}
          disabled={!isCodeSent || !isVerified}
          marginTop="200px"
        />
      </S.Container>
    </>
  );
};

export default ModEmail;
