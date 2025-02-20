import { getDaysInMonth } from "date-fns";
import { useEffect, useState } from "react";
import { getHighestColor } from "../apis/daily/getDailyData";

const DATE_MONTH_FIXER = 1;
const CALENDER_LENGTH = 35;
const DEFAULT_TRASH_VALUE = 0;
const DAY_OF_WEEK = 7;

const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const totalMonthDays = getDaysInMonth(currentDate); // 한 달의 총 일수
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth()); // 해당하는 월의 첫 날
  const firstDayWeekDay = firstDayOfMonth.getDay(); // 첫 번째 날짜의 요일 (일요일:0, 월:1~~)

  const [colorList, setColorList] = useState([]); // 각 날짜별 가장 높은 카테고리 색 저장

  // 첫 주에 필요한 빈 칸(0) 개수
  // ex) 수요일부터 시작하면 일~화 는 0으로 채워짐
  const prevDayList = Array.from({
    length: Math.max(0, firstDayWeekDay),
  }).map(() => DEFAULT_TRASH_VALUE);

  // 현재 달의 일수만큼을 배열로 반환
  const currentDayList = Array.from({ length: totalMonthDays }).map((_, i) => i + 1);

  // 남는 칸을 빈 칸(0)으로
  const nextDayList = Array.from({
    length: CALENDER_LENGTH - currentDayList.length - prevDayList.length,
  }).map(() => DEFAULT_TRASH_VALUE);

  // 전체 달력 데이터 구성 (1차원 배열)
  const currentCalendarList = prevDayList.concat(currentDayList, nextDayList); // 달력의 모든 칸을 배열로 생성

  // 주별로 나누는 작업 (1차원 배열을 2D형태로 )
  const weekCalendarList = currentCalendarList.reduce((acc, cur, idx) => {
    const chunkIndex = Math.floor(idx / DAY_OF_WEEK);

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }

    acc[chunkIndex].push(cur);
    return acc;
  }, []);
  /*weekCalendarList 구조
  [
  [0, 0, 0, 0, 1, 2, 3],  // 첫째 주
  [4, 5, 6, 7, 8, 9, 10], // 둘째 주
  ...
]
 */

  // 날짜별로 가장 높은 비율 카테고리의 색상 리스트
  useEffect(() => {
    const getColors = async () => {
      const colors = await Promise.all(
        currentDayList.map(async (day) => {
          const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(
            2,
            "0"
          )}-${String(day).padStart(2, "0")}`;
          // console.log(formattedDate);
          const { highestColor } = await getHighestColor(formattedDate);
          return highestColor;
        })
      );
      setColorList(colors);
    };

    getColors();
  }, [currentDate]);

  return {
    weekCalendarList: weekCalendarList, // 주별로 나눈 달력 데이터
    currentDate: currentDate, // 현재 날짜
    setCurrentDate: setCurrentDate, // 날짜 변경 함수
    colorList, // 날짜별 색상 리스트
  };
};

export default useCalendar;
