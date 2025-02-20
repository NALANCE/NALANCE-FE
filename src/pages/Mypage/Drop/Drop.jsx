import React from 'react';
import axiosInstance from 'apis/defaultAxios'; // Axios 인스턴스 가져오기
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Topbar from 'components/Topbar/Topbar';
import BottomLogo from 'components/BottomLogo/BottomLogo';
import DropBtn from 'components/DropBtn/DropBtn';
import cat from 'assets/icons/drop_cat.svg';
import bubble from 'assets/icons/drop_bubble.png';
import speech from 'assets/icons/drop_speech.svg';
import * as S from './Drop.style';

const Drop = () => {
  const navigate = useNavigate();

  // 회원 탈퇴 API 요청 함수
  const handleDropUser = async () => {
    // // 임시 AccessToken 및 RefreshToken 저장
    // localStorage.setItem(
    //   'accessToken',
    //   'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMyIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3MzgzMjc5Mzh9.29xjr0KyhXTXvAA_oujDBKK6T52wn1aSGrwoiwOjsBI'
    // );
    // localStorage.setItem(
    //   'refreshToken',
    //   'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3Mzg5MzA5Mzh9.oehXky8eof95iibh1nO_NWCLiAXY8fruwd_vyfRaPuI'
    // );

    try {
      const response = await axiosInstance.patch('/api/v0/members');

      if (response.data.isSuccess) {
        alert('회원 탈퇴가 완료되었습니다.');
        // 로컬 스토리지의 토큰 삭제
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        navigate('/'); // 홈으로 이동
      } else {
        alert(response.data.message || '회원 탈퇴에 실패했습니다.');
      }
    } catch (error) {
      console.error('회원 탈퇴 중 오류 발생:', error);
      alert('회원 탈퇴 중 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <Topbar pageTitle="회원탈퇴" />
      <S.Container>
        <S.Cat src={cat} alt="고양이" />
        <S.Bubble>
          <img src={bubble} alt="말풍선" />
          <S.Speech src={speech} alt="대사" />
        </S.Bubble>
        <S.BtnWrapper>
          <DropBtn text="회원 탈퇴" onClick={handleDropUser} />
        </S.BtnWrapper>
      </S.Container>
      <S.BottomLogoWrapper>
        <BottomLogo />
      </S.BottomLogoWrapper>
    </>
  );
};

export default Drop;
