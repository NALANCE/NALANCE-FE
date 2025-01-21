import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import BottomLogo from 'components/BottomLogo/BottomLogo';
import PageTitle from 'components/common/PageTitle/PageTitle';
import LoginBtn from 'components/common/LoginBtn/LoginBtn';
import * as S from './Login.style';

const User = {
  email: 'abc@naver.com',
  pw: 'Nalance123!!',
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [notAllow, setNotAllow] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePw = (e) => {
    setPw(e.target.value);
  };

  const handleLoginClick = () => {
    if (notAllow) {
      setErrorMessage('이메일 또는 비밀번호가 일치하지 않습니다.');
    } else {
      setErrorMessage('');
    }
  };

  const onClickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      alert('로그인에 성공했습니다.');
    } else {
      alert('등록되지 않은 회원이거나 입력한 값이 일치하지 않습니다.');
    }
  };

  useEffect(() => {
    if (email === User.email && pw === User.pw) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [email, pw]);

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
            {notAllow && <div>{errorMessage}</div>}
          </S.ErrorMessageWrap>
        </S.ContentWrap>

        <S.BtnContainer>
          <LoginBtn
            text="로그인"
            link="/Todo"
            notAllow={notAllow}
            onClickConfirmButton={handleLoginClick}
          />
        </S.BtnContainer>
      </S.Container>
      <BottomLogo/>
    </>
  );
};

export default Login;
