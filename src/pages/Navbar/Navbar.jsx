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
      <S.TopContainer>
        <S.FishIcon onClick={toggleSidebar}>
          <img src={navIcon}></img>
        </S.FishIcon>
        <img src={navLogo}></img>
      </S.TopContainer>
      <S.SidebarContainer isOpen={isSidebarOpen}>
        <S.SidebarContent isOpen={isSidebarOpen}>
          <S.FishIcon onClick={toggleSidebar}>
            닫기<img src={navIcon}></img>
          </S.FishIcon>

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
    </div>
  );
};

export default Navbar;
