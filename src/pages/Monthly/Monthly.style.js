import styled from "styled-components";

export const DailyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  height: calc(100dvh - 190px);

  @media all and (min-width: 769px) and (orientation: landscape) {
    display: grid;
    grid-template-rows: repeat(2, 1fr); /* 2개의 행 */
    grid-template-columns: repeat(2, 1fr); /* 2개의 열 */
  }
`;
