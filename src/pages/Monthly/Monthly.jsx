import ShowMonth from "components/ShowMonth/ShowMonth";
import MonthlyChart from "components/MonthlyChart/MonthlyChart";
import Calendar from "components/Calendar/Calendar";
import ImgSave from "components/ImgSave/ImgSave";

import useDate from "hooks/useDate";

import { DailyContainer } from "pages/Daily/Daily.style.js";
import { useEffect, useState } from "react";
import { getDailyData, getMonthlyData } from "../../apis/daily/getDailyData";
import { SkeletonCircle } from "../../components/Skeleton/ChartSkeleton.style";

const Monthly = () => {
  // api 데이터 상태
  const [data, setData] = useState(null);

  // 에러 상태
  const [error, setError] = useState(null);

  // 날짜 가져오기
  const [date, handleDateChange, year, month] = useDate();

  // api 데이터 가져오기
  useEffect(() => {
    // 문자열 -> 정수
    const intYear = parseInt(year);
    const intMonth = parseInt(month);

    const getData = async () => {
      setError(null); // 에러 초기화

      try {
        const result = await getDailyData(date);
        console.log(result);
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    getData();
  }, [date]);

  return (
    <DailyContainer className="ImgContainer">
      <ShowMonth />
      {/* data가 null이 아니고 존재할 때만 MonthlyChart 렌더링 */}
      {data ? <MonthlyChart date={date} data={data} /> : <SkeletonCircle />}
      <Calendar date={date} onDateChange={handleDateChange} data={data} />
      <ImgSave />
    </DailyContainer>
  );
};

export default Monthly;
