import ShowDate from "components/ShowDate/ShowDate.jsx";
import PieChart from "components/PieChart/PieChart";
import PieList from "components/PieList/PieList";
import ImgSave from "components/ImgSave/ImgSave";

import useDate from "hooks/useDate";

import * as S from "./Daily.style";
import { useState, useEffect } from "react";
import ChartSkeleton from "../../components/Skeleton/ChartSkeleton";
import { getDailyData, getDailyBalanced } from "../../apis/daily/getDailyData";
import useDailyData from "hooks/useDailyData";

import dailyChat from "assets/icons/dailyChat.svg";
import originalCat from "assets/icons/originalCat.svg";
import PCBgr from "components/PCBgr/PCBgr";

const Dailly = () => {
  const { date, handleDateChange, data, balance, error, isLoading } = useDailyData();

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
