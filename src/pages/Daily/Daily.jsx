import ShowDate from "components/ShowDate/ShowDate.jsx";
import PieChart from "components/PieChart/PieChart";
import PieList from "components/PieList/PieList";
import ImgSave from "components/ImgSave/ImgSave";

import useDate from "hooks/useDate";

import * as S from "./Daily.style";
import { useState, useEffect } from "react";
import ChartSkeleton from "../../components/Skeleton/ChartSkeleton";
import { getDailyData, getDailyBalanced } from "../../apis/daily/getDailyData";

import dailyChat from "assets/icons/dailyChat.svg";
import originalCat from "assets/icons/originalCat.svg";
import PCBgr from "components/PCBgr/PCBgr";

const Dailly = () => {
  // api 데이터 상태
  const [data, setData] = useState(null);

  // balance 관련
  const [balance, setBalance] = useState(null);

  // 에러 상태
  const [error, setError] = useState(null);

  // 데이터 로딩 상태 관리
  const [isLoading, setIsLoading] = useState(true);

  // 날짜 가져오기
  const [date, handleDateChange] = useDate();

  // api 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // date 변경될 때마다 스켈레톤 ui
      setError(null); // 에러 초기화

      try {
        const result = await getDailyData(date);
        setData(result);

        const balanced = await getDailyBalanced(date);
        setBalance(balanced);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false); // 로딩상태 비활성화
      }
    };

    fetchData();
  }, [date]);

  return (
    <>
      <S.DailyContainer className="ImgContainer">
        <ShowDate date={date} onDateChange={handleDateChange} />

        {isLoading ? (
          <ChartSkeleton />
        ) : error ? (
          <p>🥲데이터를 가져오는 중 오류 발생</p>
        ) : (
          <div>
            <PieChart date={date} data={data} />
            <PieList date={date} data={data} balance={balance} />
          </div>
        )}
      </S.DailyContainer>

      <ImgSave />

      {/* 컴퓨터 비율  */}
      <PCBgr $top={"1.3"} />
      <S.WarningContainer>
        <S.ChatWrapper>
          <img src={dailyChat} />
        </S.ChatWrapper>
        <S.CatWrapper>
          <img src={originalCat} />
        </S.CatWrapper>
      </S.WarningContainer>
    </>
  );
};

export default Dailly;
