import styled from "styled-components";

export const DailyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  height: calc(100dvh - 190px);

  @media all and (min-width: 769px) and (orientation: landscape) {
    flex-direction: row;
    gap: 13.5rem;
    justify-content: center;
    align-items: center;
    margin-top: -5vh;
  }
`;

export const ShowMonthWrapper = styled.div`
  order: 1;
`;

export const MonthlyChartWrapper = styled.div`
  order: 2;
  @media all and (min-width: 769px) and (orientation: landscape) {
    order: 3;
  }
`;

export const CalendarWrapper = styled.div`
  order: 3;
  @media all and (min-width: 769px) and (orientation: landscape) {
    order: 2;
  }
`;

export const ItemContainer = styled.div`
  display: contents;
  @media all and (min-width: 769px) and (orientation: landscape) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
