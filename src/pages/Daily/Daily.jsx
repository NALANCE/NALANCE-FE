import ShowDate from "components/ShowDate/ShowDate.jsx";
import PieChart from "components/PieChart/PieChart";
import PieList from "components/PieList/PieList";
import ImgSave from "components/ImgSave/ImgSave";

import useDate from "hooks/useDate";

import * as S from "./Daily.style";
import { useState, useEffect } from "react";
import ChartSkeleton from "../../components/Skeleton/ChartSkeleton";

const Dailly = () => {
  // 데이터 로딩 상태 관리
  const [isLoading, setIsLoading] = useState(true);

  // 날짜 가져오기
  const [date, handleDateChange] = useDate();

  // api 연동 전 스켈레톤 ui 연결
  useEffect(() => {
    // date변경될때마다 스켈레톤 ui
    setIsLoading(true);

    // 예시 > 2초 후 로딩 상태를 비활성화
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // 언마운트 될 때 타이머 클리어
  }, [date]);

  return (
    <S.DailyContainer className="ImgContainer">
      <ShowDate date={date} onDateChange={handleDateChange} />

      {isLoading ? (
        <ChartSkeleton />
      ) : (
        <>
          <PieChart date={date} />
          <PieList date={date} />
        </>
      )}

      <ImgSave />
    </S.DailyContainer>
  );
};

export default Dailly;
