import React, { useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "assets/icons/navLogo.svg";
import navIcon from "assets/icons/navIcon.svg";
import * as S from "./Navbar.style";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
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
            <S.FishIcon onClick={toggleSidebar}>
              <img src={navIcon}></img>
            </S.FishIcon>

            {/* 메뉴 */}
            <Link to={"/todo"} style={{ fontSize: "24px" }}>
              하루 기록
            </Link>
            <br />
            <Link to={"/daily"} style={{ fontSize: "24px" }}>
              하루 비율
            </Link>
            <br />
            <Link to={"/monthly"} style={{ fontSize: "24px" }}>
              한달 비율
            </Link>
            <br />
            <Link to={"/mypage"} style={{ fontSize: "24px" }}>
              마이페이지
            </Link>
          </S.SidebarContent>
        </S.SidebarContainer>
      </S.NavContainer>
    </div>
  );
};

export default Navbar;
