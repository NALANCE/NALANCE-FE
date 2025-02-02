import { useEffect, useState } from "react";
import useCalendar from "hooks/useCalendar";
import * as S from "./Calendar.style";

const DAY_LIST = ["S", "M", "T", "W", "T", "F", "S"];

const Calendar = ({ date, onDateChange, data, color }) => {
  const { weekCalendarList, currentDate, colorList } = useCalendar();
  const [selectedDate, setSelectedDate] = useState(null);
  // console.log("colrList", colorList);

  // 처음 렌더링 될 때 오늘 날짜가 기본이 되도록
  useEffect(() => {
    const today = new Date();
    setSelectedDate(today.getDate());
    onDateChange(today);
  }, []);

  const handleDayClick = ($day) => {
    if ($day !== 0) {
      setSelectedDate($day);
      const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), $day);
      onDateChange(newDate); // 클릭된 날짜를 부모 컴포넌트로 전송
    }
  };

  const $isSelectedDay = ($day) => {
    return $day === selectedDate;
  };

  const $isToday = ($day) => {
    const today = new Date();

    return (
      $day === today.getDate() &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear()
    );
  };

  return (
    <S.CalendarContainer>
      <S.DayContainer>
        {DAY_LIST.map(($day, idx) => (
          <S.DayWrapper key={idx}>{$day}</S.DayWrapper> // 요일 표시
        ))}
      </S.DayContainer>

      {weekCalendarList.map((week, idx) => (
        <S.DateContainer key={idx}>
          {week.map(($day, i) => (
            <S.DateWrapper key={i}>
              <S.DateBtn
                onClick={() => handleDayClick($day)}
                key={i}
                $isToday={$isToday($day)}
                $day={$day}
                $isSelected={$isSelectedDay($day)}
              >
                <S.DateTxt $isToday={$isToday($day)} $day={$day}>
                  {$day !== 0 ? $day : ""}
                </S.DateTxt>
              </S.DateBtn>

              {$day !== 0 && $isToday($day) && <S.TodayRed>TODAY</S.TodayRed>}
              {$day !== 0 && !$isToday($day) && <S.CategoryCircle color={colorList[$day - 1]}></S.CategoryCircle>}
            </S.DateWrapper>
          ))}
        </S.DateContainer>
      ))}
    </S.CalendarContainer>
  );
};

export default Calendar;
