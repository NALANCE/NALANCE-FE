import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

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
  width: ${(props) => (props.isOpen ? "min(71vw,280px)" : "0")};

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0px 50px 50px 0px;

  overflow-x: hidden;
  transition: width 0.3s ease;

  z-index: 1000; // Overlay 위로
`;

export const SidebarContent = styled.nav`
  padding: 20px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const FishIcon = styled.h1`
  cursor: pointer;
  font-size: 2rem;
`;

export const TopContainer = styled.div`
  margin-top: clamp(2rem, 18.83vw, 6rem);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 4vw;
`;
