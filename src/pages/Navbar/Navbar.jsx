import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import navLogo from "assets/icons/navLogo.svg";
import navIcon from "assets/icons/navIcon.svg";
import footerLogo from "assets/icons/footerLogo.svg";
import * as S from "./Navbar.style";
import { footer } from "framer-motion/client";

const Navbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleMenuClick = (path) => {
    navigate(path); // 경로 이동
    toggleSidebar();
  };

  return (
    <div>
      {isSidebarOpen && <S.Overlay />} {/* 배경 어둡게 */}
      <S.NavContainer>
        {/* 상단바 - 아이콘이랑 로고 이미지 */}
        <S.TopContainer>
          <S.FishIcon onClick={toggleSidebar}>
            <img src={navIcon}></img>
          </S.FishIcon>
          <img src={navLogo}></img>
        </S.TopContainer>

        {/* navbar(sidebar) */}
        <S.SidebarContainer isOpen={isSidebarOpen}>
          <S.SidebarContent isOpen={isSidebarOpen}>
            <S.FishNavIcon onClick={toggleSidebar}>
              <img src={navIcon}></img>
            </S.FishNavIcon>

            {/* 메뉴 */}
            <S.MenuList>
              <S.MenuItem onClick={() => handleMenuClick("/todo")}>하루 기록</S.MenuItem>
              <S.MenuItem onClick={() => handleMenuClick("/daily")}>하루 비율</S.MenuItem>
              <S.MenuItem onClick={() => handleMenuClick("/monthly")}>한달 비율</S.MenuItem>
              <S.MenuItem onClick={() => handleMenuClick("/mypage")}>마이페이지</S.MenuItem>
            </S.MenuList>
            <S.FooterLogo>
              <img src={footerLogo} />
            </S.FooterLogo>
          </S.SidebarContent>
        </S.SidebarContainer>
      </S.NavContainer>
    </div>
  );
};

export default Navbar;
