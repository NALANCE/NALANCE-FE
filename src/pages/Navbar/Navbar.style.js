import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999; //Sidebar 위에 나타나도록
`;

export const NavContainer = styled.div`
  position: relative;
  z-index: 1000; // Overlay 아래로
`;

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: min(71vw, 280px);

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0px 50px 50px 0px;

  overflow-x: hidden;
  transform: ${(props) => (props.$isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease;

  z-index: 1000; // Overlay 위로
`;

export const SidebarContent = styled.nav`
  padding: 20px;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
`;

export const FishIcon = styled.div`
  cursor: pointer;

  width: clamp(2.3rem, 14vw, 8.4rem);

  > img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const LogoIcon = styled.div`
  width: clamp(13.4rem, 41vw, 37.9rem);

  > img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const FishNavIcon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10%;
  right: 5%;
`;

export const TopContainer = styled.div`
  margin-top: clamp(4.3rem, 8vh, 5.9rem);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 4vw;

  @media all and (min-width: 769px) and (orientation: landscape) {
    margin-top: clamp(1rem, 2vh, 3rem);
  }
`;

export const MenuList = styled.ul`
  margin-top: 16.9rem;
  margin-left: 4rem;
`;

export const MenuItem = styled.li`
  font-family: "Freesentation", sans-serif;
  font-weight: 600;
  font-size: 2.4rem;

  margin-top: 5rem;

  text-shadow: ${(props) => (props.$isActive ? "0.2px 0.2px 1px #2f2f2f" : "none")};

  cursor: pointer;
`;

export const FooterLogo = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
`;
