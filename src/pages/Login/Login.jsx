import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import BottomLogo from 'components/BottomLogo/BottomLogo';
import PageTitle from 'components/common/PageTitle/PageTitle';
import LoginBtn from 'components/common/LoginBtn/LoginBtn';
import * as S from './Login.style';

import axiosInstance from "apis/defaultAxios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [notAllow, setNotAllow] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePw = (e) => {
    setPw(e.target.value);
  };

  const handleLoginClick = async(e) => {
    console.log("로그인 클릭!");

     setLoading(true);
     console.log("setLoading 이후");
     const userLogin = {
          email: email,
          password: pw
    };
          
     console.log(userLogin);
      try{
            const response = await axiosInstance.post("/api/v0/members/login",userLogin);
            console.log('login success', response);
            if(response.data.isSuccess){
                setErrorMessage('');

                localStorage.setItem("accessToken", response.data.result.accessToken);
                localStorage.setItem("refreshToken", response.data.result.refreshToken);

                navigate("/Todo");
            }
            else{
                console.log('login failed', response);
                setErrorMessage('이메일 또는 비밀번호가 일치하지 않습니다.');
            }
      }
      catch(error){
                console.error('login failed', error);
                setErrorMessage('이메일 또는 비밀번호가 일치하지 않습니다.');
      }
      finally{
                setLoading(false);
      }
  };

  return (
    <>
      <PageTitle pageTitle="로그인" />
      <S.Container>
        <S.ContentWrap>
          <S.InputTitle>Email</S.InputTitle>
          <S.InputWrap>
            <S.Input
              type="text"
              className="input"
              placeholder="이메일"
              value={email}
              onChange={handleEmail}
            />
          </S.InputWrap>

          <S.InputGap />

          <S.InputTitle>Password</S.InputTitle>
          <S.InputWrap>
            <S.Input
              type="password"
              className="input"
              placeholder="비밀번호"
              value={pw}
              onChange={handlePw}
            />
          </S.InputWrap>

          <S.ErrorMessageWrap>
            {<div>{errorMessage}</div>}
          </S.ErrorMessageWrap>
        </S.ContentWrap>

        <S.BtnContainer>
          <LoginBtn
            text="로그인"
            link="/Todo"
            notAllow={true}
            onClickConfirmButton={handleLoginClick}
          />
        </S.BtnContainer>
      </S.Container>
      <BottomLogo/>
    </>
  );
};

export default Login;
