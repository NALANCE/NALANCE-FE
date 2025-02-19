import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Mypage.style"; // 스타일 파일 임포트
import ConfirmModal from "components/common/ConfirmModal/ConfirmModal"; // ConfirmModal 임포트

const Mypage = () => {
  const navigate = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {

    localStorage.removeItem("accessToken"); // 로컬 스토리지에서 토큰 삭제
    navigate("/"); // 로그아웃 후 로그인 페이지로 이동
  };

  return (
    <S.Container>
      <S.LinkText onClick={() => navigate("/mypage/email")}>아이디 수정</S.LinkText>
      <S.LinkText onClick={() => navigate("/mypage/password")}>비밀번호 수정</S.LinkText>
      <S.LinkText onClick={() => navigate("/mypage/category")}>카테고리 수정</S.LinkText>
      <S.LinkText onClick={() => navigate("/mypage/notice")}>공지사항</S.LinkText>
      <S.LinkText onClick={() => navigate("/mypage/ask")}>문의하기</S.LinkText>
      <S.LinkText onClick={() => setIsLogoutModalOpen(true)}>로그아웃</S.LinkText>
      <S.LinkText onClick={() => navigate("/mypage/drop")}>회원탈퇴</S.LinkText>

      <ConfirmModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
        message="로그아웃 하시겠습니까?"
      />
    </S.Container>
  );
};

export default Mypage;
