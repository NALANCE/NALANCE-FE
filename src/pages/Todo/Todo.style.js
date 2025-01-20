import styled from "styled-components";
import ShowDate from "components/ShowDate/ShowDate.jsx";

export const DailyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;


export const TodoCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 80%;
  gap: 15px;
  margin-top: 20px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;