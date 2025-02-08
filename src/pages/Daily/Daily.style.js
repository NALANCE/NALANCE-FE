import styled from "styled-components";
import ShowDate from "components/ShowDate/ShowDate.jsx";

export const DailyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  @media all and (min-width: 769px) and (orientation: landscape) {
    display: none;
  }
`;

export const WarningContainer = styled.div`
  display: none;
  height: calc(100vh - 90.2px);

  @media all and (min-width: 769px) and (orientation: landscape) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ChatWrapper = styled.div`
  width: min(29.3rem, 74.5vw);

  > img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const CatWrapper = styled.div`
  width: min(9.2rem, 23.4vw);

  > img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
