import React, { useState, useEffect } from "react";
import emailValidator from "email-validator";
import axiosInstance from "apis/defaultAxios";
import Topbar from "components/Topbar/Topbar";
import ChangeCompleteBtn from "components/common/ChangeCompleteBtn/ChangeCompleteBtn";
import originalCat from "assets/icons/originalCat.svg";
import * as S from "./ModEmail.style";
import ControlBtn from "../../../components/common/ControlBtn/ControlBtn";

const ModEmail = () => {
  const [currentEmail, setCurrentEmail] = useState("");
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [errorMessage1, setErrorMessage1] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");

  useEffect(() => {


    const fetchCurrentEmail = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axiosInstance.get("/api/v0/members/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log("이메일 가져오기 성공:", response.data.result.email);
        setCurrentEmail(response.data.result.email);
      } catch (error) {
        console.error("이메일 가져오기 실패:", error);
      }
    };

    fetchCurrentEmail();
  }, []);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!value) {
      setErrorMessage1("");
    }
  };

  const handleSendCode = async () => {
    if (email === currentEmail) {
      setErrorMessage1("기존의 이메일과 동일합니다.");
      return;
    }
    if (!emailValidator.validate(email)) {
      setErrorMessage1("잘못된 형식의 이메일입니다.");
      return;
    }
    try {
      const response = await axiosInstance.post("/api/v0/emails/send-verification", {
        email,
      });
      if (response.data.isSuccess) {
        setErrorMessage1("");
        setIsCodeSent(true);
        console.log("인증번호 전송 성공:", response.data.message);
      } else {
        setErrorMessage1("인증번호 전송 실패: " + response.data.message);
      }
    } catch (error) {
      console.error("인증번호 전송 에러:", error);
      setErrorMessage1("인증번호 전송에 실패했습니다.");
    }
  };

  const handleVerifyCode = async () => {
    if (!verificationCode) {
      setErrorMessage2("인증번호를 입력하세요.");
      return;
    }
    try {
      const response = await axiosInstance.post("/api/v0/emails/verification", {
        email,
        code: verificationCode,
      });
      if (response.data.isSuccess) {
        setErrorMessage2("");
        setIsVerified(true);
        console.log("인증 성공:", response.data.message);
      } else {
        setErrorMessage2("인증 실패: " + response.data.message);
      }
    } catch (error) {
      console.error("인증 실패 에러:", error);
      setErrorMessage2("인증에 실패했습니다.");
    }
  };

  const isVerificationCodeValid = (code) => {
    const regex = /^[A-Za-z0-9]{6}$/;
    return regex.test(code);
  };

  const handleChangeComplete = async () => {
    if (!isVerified) {
      alert("인증이 완료되지 않았습니다.");
      return;
    }
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axiosInstance.patch(
        "/api/v0/members/email",
        { email },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.data.isSuccess) {
        alert("이메일 변경이 완료되었습니다.");
        setCurrentEmail(email);
        setEmail("");
        setVerificationCode("");
        setIsCodeSent(false);
        setIsVerified(false);
        setErrorMessage1("");
        setErrorMessage2("");
        console.log("이메일 변경 성공:", response.data.message);
      } else {
        alert("이메일 변경 실패: " + response.data.message);
      }
    } catch (error) {
      console.error("이메일 변경 실패 에러:", error);
      alert("이메일 변경 중 문제가 발생했습니다.");
    }
  };

  return (
    <>
      <Topbar pageTitle="아이디 수정" />
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
            placeholder="이메일"
          />
          <ControlBtn
            text={isCodeSent ? "재전송" : "전송"}
            onClick={handleSendCode}
            isDisabled={!email}
            status={isCodeSent ? "InProgress" : "Idle"}
          />
        </S.InputContainer>
        <S.ErrorTextContainer>
          {errorMessage1 && <S.ErrorText>{errorMessage1}</S.ErrorText>}
        </S.ErrorTextContainer>
        <S.InputContainer>
          <S.Input
            as={errorMessage2 ? S.ErrorInput : S.Input}
            type="text"
            value={verificationCode}
            onChange={(e) => {
              const value = e.target.value;
              setVerificationCode(value);
              if (!value) {
                setErrorMessage2("");
              }
            }}
            placeholder="인증번호"
          />
          <ControlBtn
            text="확인"
            onClick={handleVerifyCode}
            isDisabled={!isCodeSent || !isVerificationCodeValid(verificationCode)}
            status={isVerified ? "Completed" : "InProgress"}
          />
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
