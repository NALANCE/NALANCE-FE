import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import navLogo from "assets/icons/navLogo.svg";
import navIcon from "assets/icons/navIcon.svg";
import footerLogo from "assets/icons/footerLogo.svg";
import * as S from "./Navbar.style";

const Navbar = () => {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleMenuClick = (path, menuId) => {
    setActiveMenu(menuId); // 메뉴 클릭 시 해당 메뉴 스타일링 변경

    // 스타일 변경 후 페이지 이동
    setTimeout(() => {
      navigate(path); // 경로 이동
      setActiveMenu(null); // 다시 원래대로
      toggleSidebar();
    }, 100); // 잠시 딜레이를 주어서 스타일이 반영될 시간을 확보
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
              <S.MenuItem onClick={() => handleMenuClick("/todo", "todo")} isActive={activeMenu === "todo"}>
                하루 기록
              </S.MenuItem>
              <S.MenuItem onClick={() => handleMenuClick("/daily", "daily")} isActive={activeMenu === "daily"}>
                하루 비율
              </S.MenuItem>
              <S.MenuItem onClick={() => handleMenuClick("/monthly", "monthly")} isActive={activeMenu === "monthly"}>
                한달 비율
              </S.MenuItem>
              <S.MenuItem onClick={() => handleMenuClick("/mypage", "mypage")} isActive={activeMenu === "mypage"}>
                마이페이지
              </S.MenuItem>
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
