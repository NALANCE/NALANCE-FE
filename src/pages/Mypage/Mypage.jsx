import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Mypage.style"; // 스타일 파일 임포트

const Mypage = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.LinkText onClick={() => navigate("/mypage/email")}>아이디 수정</S.LinkText>
      <S.LinkText onClick={() => navigate("/mypage/password")}>비밀번호 수정</S.LinkText>
      <S.LinkText onClick={() => navigate("/mypage/category")}>카테고리 수정</S.LinkText>
      <S.LinkText onClick={() => navigate("/mypage/notice")}>공지사항</S.LinkText>
      <S.LinkText onClick={() => navigate("/mypage/ask")}>문의하기</S.LinkText>
      <S.LinkText onClick={() => navigate("/mypage/logout")}>로그아웃</S.LinkText>
      <S.LinkText onClick={() => navigate("/mypage/drop")}>회원탈퇴</S.LinkText>
    </S.Container>
  );
};

export default Mypage;
