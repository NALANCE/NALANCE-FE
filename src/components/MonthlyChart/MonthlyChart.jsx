import pieActive from "assets/icons/pieActive.svg";
import pieUnactive from "assets/icons/pieUnactive.svg";
import barActive from "assets/icons/barActive.svg";
import barUnactive from "assets/icons/barUnactive.svg";

import PieChart from "components/PieChart/PieChart.jsx";
import BarChart from "components/BarChart/BarChart";

import * as S from "./MonthlyChart.style";

import { useState } from "react";

const MonthlyChart = ({ date }) => {
  const [pieIcon, setPieIcon] = useState(pieActive); // 원형 그래프
  const [barIcon, setBarIcon] = useState(barUnactive); // 막대 그래프

  const handleIconChange = () => {
    setPieIcon((prev) => (prev === pieActive ? pieUnactive : pieActive));
    setBarIcon((prev) => (prev === barUnactive ? barActive : barUnactive));
  };

  return (
    <S.ChartDiv>
      <S.Line $marginTop={"2.3rem"}></S.Line>
      <S.ChartContainer>
        <S.IconWrapper>
          <img src={pieIcon} onClick={handleIconChange}></img>
          <img src={barIcon} onClick={handleIconChange}></img>
        </S.IconWrapper>
        {pieIcon === pieActive ? (
          <S.ChartWrapper>
            <PieChart date={date} width={"184px"} height={"184px"} marginTop={"0"} label={false} />
          </S.ChartWrapper>
        ) : (
          <S.ChartWrapper>
            <BarChart date={date} />
          </S.ChartWrapper>
        )}
      </S.ChartContainer>
      <S.Line $marginTop={"1.8rem"}></S.Line>
    </S.ChartDiv>
  );
};

export default MonthlyChart;
