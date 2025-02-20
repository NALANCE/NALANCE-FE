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


  /* 스크롤바 설정 */
  max-height: 450px;
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  @media all and (min-width: 769px) and (orientation: landscape) {
    width: 32rem;
  }
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

export const DataContainer = styled.div`
  display: contents;

  @media all and (min-width: 769px) and (orientation: landscape) {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    margin-top: 4.3rem;
    gap: 10rem;
  }
`;

export const Line = styled.div`
  display: none;
  @media all and (min-width: 769px) and (orientation: landscape) {
    display: block;
    width: 0.2px;
    height: min(52vh, 43.6rem);
    background: #000;

    margin-left: 8rem;
  }
`;

export const ChartContainer = styled.div`
  display: none;
  @media all and (min-width: 769px) and (orientation: landscape) {
    display: block;
    margin-top: -4rem;
  }
`;

export const DateWrapper = styled.div`
  @media all and (min-width: 769px) and (orientation: landscape) {
    display: block;
    > div {
      margin-top: 0px;
    }
  }
`;
