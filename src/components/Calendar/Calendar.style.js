import styled from "styled-components";

export const CalendarContainer = styled.div`
  border-radius: 16px;
  padding: 8px 18px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  margin-top: 2.3rem;

  box-sizing: border-box;
  width: 29.9rem;
  height: 27rem;
`;

export const DayContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  width: 24rem;
`;

export const DayWrapper = styled.div`
  font-family: "Freesentation", sans-serif;
  font-weight: 500;
  font-size: 2rem;
  line-height: 4rem;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DateBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  width: 2.6rem;

  cursor: ${(props) => (props.day === 0 ? "default" : "pointer")};
  opacity: ${(props) => (props.day === 0 ? "0" : "1")};
  color: ${(props) => (props.$isSelected ? "red" : "black")};

  background: none;
  border: none;
`;

export const DateTxt = styled.div`
  margin: 0 auto;

  font-family: "Freesentation", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.color};

  width: 1rem;
  height: 1rem;

  border-radius: 50%;
`;

export const TodayRed = styled.div`
  color: red;
  font-size: 0.8rem;
  font-weight: 590;
`;
