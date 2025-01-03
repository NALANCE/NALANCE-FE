import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props) => (props.isOpen ? "71vw" : "0")};
  background-color: #f4f4f4;
  overflow-x: hidden;
  transition: width 0.3s ease;
  box-shadow: ${(props) => (props.isOpen ? "2px 0 5px rgba(0,0,0,0.3)" : "none")};
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
