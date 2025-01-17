import React, { useState } from "react";
import Topbar from "components/Topbar/Topbar";
import ChangeCompleteBtn from "components/common/ChangeCompleteBtn/ChangeCompleteBtn"; // ChangeCompleteBtn 임포트
import passEye from "assets/icons/passEye.svg"; // passEye 아이콘 임포트
import * as S from "./ModPass.style";

const ModPass = () => {
  const [currentPassword, setCurrentPassword] = useState("123!"); // TODO: Add API call to get the current password
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage1, setErrorMessage1] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
  };

  const handleNewPasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    if (!value) {
      setErrorMessage1("");
    } else if (value === currentPassword) {
      setErrorMessage1("새 비밀번호가 현재 비밀번호와 동일합니다.");
    } else if (!validatePassword(value)) {
      setErrorMessage1("비밀번호는 영어, 숫자, 특수기호를 포함한 8자 이상이어야 합니다.");
    } else {
      setErrorMessage1("");
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

  console.log(isFlipped);

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
        <ChangeCompleteBtn onClick={() => alert("비밀번호 변경이 완료되었습니다.")} text="비밀번호 변경" disabled={!isFormValid()} marginTop="200px"/>
      </S.Container>
    </>
  );
};

export default ModPass;
