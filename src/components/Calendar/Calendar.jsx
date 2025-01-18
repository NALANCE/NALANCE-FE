import { useState } from "react";
import useCalendar from "hooks/useCalendar";
import * as S from "./Calendar.style";

const DAY_LIST = ["S", "M", "T", "W", "T", "F", "S"];

const Calendar = () => {
  const { weekCalendarList, currentDate } = useCalendar();

  const handleDayClick = (day) => {};

  const isToday = (day) => {
    const today = new Date();

    return (
      day === today.getDate() &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear()
    );
  };

  return (
    <S.CalendarContainer>
      <S.DayContainer>
        {DAY_LIST.map((day) => (
          <S.DayWrapper>{day}</S.DayWrapper> // 요일 표시
        ))}
      </S.DayContainer>

      {weekCalendarList.map((week, idx) => (
        <S.DateContainer key={idx}>
          {week.map((day, i) => (
            <S.DateWrapper>
              <S.DateBtn onClick={() => handleDayClick(day)} key={i} isToday={isToday(day)} day={day}>
                <S.DateTxt isToday={isToday(day)} day={day}>
                  {day !== 0 ? day : ""}
                </S.DateTxt>
              </S.DateBtn>

              {day !== 0 && isToday(day) && <S.TodayRed>TODAY</S.TodayRed>}
              {day !== 0 && !isToday(day) && <S.CategoryCircle color={"#F8A19A"}></S.CategoryCircle>}
            </S.DateWrapper>
          ))}
        </S.DateContainer>
      ))}
    </S.CalendarContainer>
  );
};

export default Calendar;
