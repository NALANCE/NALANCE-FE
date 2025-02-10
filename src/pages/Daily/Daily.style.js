import styled from "styled-components";
import ShowDate from "components/ShowDate/ShowDate.jsx";

export const DailyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  height: calc(100dvh - 90.2px);

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
  width: min(31.5rem, 24.6vw);

  > img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const CatWrapper = styled.div`
  width: min(19.2rem, 15vw);

  > img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
