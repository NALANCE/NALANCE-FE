import React, { useState, useEffect } from "react";
import axios from "axios";
import Topbar from "components/Topbar/Topbar";
import ChangeCompleteBtn from "components/common/ChangeCompleteBtn/ChangeCompleteBtn";
import passEye from "assets/icons/passEye.svg";
import * as S from "./ModPass.style";

const ModPass = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage1, setErrorMessage1] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // Access Token과 Refresh Token을 localStorage에 설정
  useEffect(() => {
    localStorage.setItem("accessToken", "your-access-token"); // Access Token 설정
    localStorage.setItem("refreshToken", "your-refresh-token"); // Refresh Token 설정
    console.log("Access Token과 Refresh Token이 설정되었습니다.");
  }, []);


  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
  };

  const handleNewPasswordChange = async (e) => {
    const value = e.target.value;
    setNewPassword(value);

    if (!value) {
      setErrorMessage1("");
    } else if (!validatePassword(value)) {
      setErrorMessage1("비밀번호는 영어, 숫자, 특수기호를 포함한 8자 이상이어야 합니다.");
    } else {
      try {
        const accessToken = localStorage.getItem("accessToken"); // Access Token 가져오기
        const response = await axios.post(
          "/api/v0/members/validate-password",
          { password: value },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`, // Authorization 헤더 추가
            },
          }
        );
        if (response.data.result) {
          setErrorMessage1("새 비밀번호가 기존 비밀번호와 동일합니다.");
        } else {
          setErrorMessage1("");
        }
      } catch (error) {
        console.error("비밀번호 검증 실패:", error);
        setErrorMessage1("비밀번호 검증 중 문제가 발생했습니다.");
      }
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (!value) {
      setErrorMessage2("");
    } else if (value !== newPassword) {
      setErrorMessage2("새 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
    } else {
      setErrorMessage2("");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    setIsFlipped(!isFlipped);
  };

  const handlePasswordChange = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken"); // Access Token 가져오기
      const response = await axios.patch(
        "/api/v0/members/password",
        {
          password: newPassword,
          confirmPassword: confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Authorization 헤더 추가
          },
        }
      );

      if (response.data.isSuccess) {
        alert("비밀번호 변경이 완료되었습니다.");
        setNewPassword("");
        setConfirmPassword("");
        setErrorMessage1("");
        setErrorMessage2("");
      } else {
        alert("비밀번호 변경 실패: " + response.data.message);
      }
    } catch (error) {
      console.error("비밀번호 변경 실패:", error);
      alert("비밀번호 변경 중 문제가 발생했습니다.");
    }
  };

  const isFormValid = () => {
    return newPassword && confirmPassword && !errorMessage1 && !errorMessage2;
  };

  return (
    <>
      <Topbar pageTitle="비밀번호 수정" />
      <S.Container>
        <S.InputContainer>
          <S.InputWrapper>
            <S.Input
              type={showPassword ? "text" : "password"}
              placeholder="새 비밀번호"
              value={newPassword}
              onChange={handleNewPasswordChange}
              hasError={!!errorMessage1}
            />
            <S.PassEyeIcon
              src={passEye}
              alt="Show Password"
              onClick={toggleShowPassword}
              isFlipped={isFlipped}
            />
          </S.InputWrapper>
        </S.InputContainer>
        <S.ErrorTextContainer>
          {errorMessage1 && <S.ErrorText>{errorMessage1}</S.ErrorText>}
        </S.ErrorTextContainer>
        <S.InputContainer>
          <S.InputWrapper>
            <S.Input
              type="password"
              placeholder="새 비밀번호 확인"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              hasError={!!errorMessage2}
            />
          </S.InputWrapper>
        </S.InputContainer>
        <S.ErrorTextContainer>
          {errorMessage2 && <S.ErrorText>{errorMessage2}</S.ErrorText>}
        </S.ErrorTextContainer>
        <ChangeCompleteBtn
          onClick={handlePasswordChange}
          text="비밀번호 변경"
          disabled={!isFormValid()}
          marginTop="200px"
        />
      </S.Container>
    </>
  );
};

export default ModPass;
