import pieActive from "assets/icons/pieActive.svg";
import pieUnactive from "assets/icons/pieUnactive.svg";
import barActive from "assets/icons/barActive.svg";
import barUnactive from "assets/icons/barUnactive.svg";

import PieChart from "components/PieChart/PieChart.jsx";
import BarChart from "components/BarChart/BarChart";

import * as S from "./MonthlyChart.style";

import { useState } from "react";

// 날짜 포맷팅 함수
const formatDate = (date) => {
  let year = date.getFullYear(); // 년
  let month = String(date.getMonth() + 1).padStart(2, "0"); // 월
  let day = String(date.getDate()).padStart(2, "0"); // 일

  return `${year}-${month}-${day}`; // 년-월-일 형태로 반환 (문자열 형태, 더미데이터에서 비교를 위해)
};

const MonthlyChart = () => {
  const [pieIcon, setPieIcon] = useState(pieActive); // 원형 그래프
  const [barIcon, setBarIcon] = useState(barUnactive); // 막대 그래프

  const handleIconChange = () => {
    setPieIcon((prev) => (prev === pieActive ? pieUnactive : pieActive));
    setBarIcon((prev) => (prev === barUnactive ? barActive : barUnactive));
  };

  const [date, setDate] = useState(formatDate(new Date()));
  //console.log(date); 2025-01-17

  // 날짜 변경시
  const handleDateChange = (newDate) => {
    const formattedDate = typeof newDate === "object" && newDate instanceof Date ? formatDate(newDate) : newDate; // 포맷 (문자열로)
    setDate(formattedDate); // 새로운 날짜 상태 업데이트
  };

  return (
    <S.ChartDiv>
      <S.Line marginTop={"2.3rem"}></S.Line>
      <S.ChartContainer>
        <S.IconWrapper>
          <img src={pieIcon} onClick={handleIconChange}></img>
          <img src={barIcon} onClick={handleIconChange}></img>
        </S.IconWrapper>
        {pieIcon === pieActive ? (
          <S.ChartWrapper>
            <PieChart date={date} width={"200"} height={"200"} marginTop={"0rem"} />
          </S.ChartWrapper>
        ) : (
          <S.ChartWrapper>
            <BarChart date={date} />
          </S.ChartWrapper>
        )}
      </S.ChartContainer>
      <S.Line marginTop={"1.8rem"}></S.Line>
    </S.ChartDiv>
  );
};

export default MonthlyChart;
