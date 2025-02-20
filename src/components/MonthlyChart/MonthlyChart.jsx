import pieActive from "assets/icons/pieActive.svg";
import pieUnactive from "assets/icons/pieUnactive.svg";
import barActive from "assets/icons/barActive.svg";
import barUnactive from "assets/icons/barUnactive.svg";

import PieChart from "components/PieChart/PieChart.jsx";
import BarChart from "components/BarChart/BarChart";

import * as S from "./MonthlyChart.style";

import { useEffect, useState } from "react";

const MonthlyChart = ({ date, data }) => {
  const [pieIcon, setPieIcon] = useState(pieActive); // 원형 그래프
  const [barIcon, setBarIcon] = useState(barUnactive); // 막대 그래프
  const [isPCScreen, setIsPCScreen] = useState(
    window.innerWidth >= 769 && window.matchMedia("(orientation: landscape)").matches
  ); // 컴퓨터 비율

  useEffect(() => {
    const handleResize = () => {
      setIsPCScreen(window.innerWidth >= 769 && window.matchMedia("(orientation: landscape)").matches);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  const handleIconChange = () => {
    setPieIcon((prev) => (prev === pieActive ? pieUnactive : pieActive));
    setBarIcon((prev) => (prev === barUnactive ? barActive : barUnactive));
  };

  return (
    <S.ChartDiv>
      {!isPCScreen && (
        <>
          <S.Line $marginTop={"2.3rem"} />
          <S.ChartContainer>
            <S.IconWrapper>
              <img src={pieIcon} onClick={handleIconChange} />
              <img src={barIcon} onClick={handleIconChange} />
            </S.IconWrapper>
            {pieIcon === pieActive ? (
              <S.ChartWrapper>
                <PieChart date={date} width={"184px"} height={"239px"} $marginTop={"0"} label={false} data={data} />
              </S.ChartWrapper>
            ) : (
              <S.ChartWrapper>
                <BarChart date={date} data={data} />
              </S.ChartWrapper>
            )}
          </S.ChartContainer>
          <S.Line $marginTop={"1.8rem"} />
        </>
      )}
      {/* 컴퓨터 비율 */}
      {isPCScreen && (
        <S.ChartContainer>
          <S.ChartWrapper>
            <PieChart date={date} width={"198px"} height={"258px"} $marginTop={"0"} label={true} data={data} />
          </S.ChartWrapper>
          <S.ChartWrapper>
            <BarChart date={date} data={data} />
          </S.ChartWrapper>
        </S.ChartContainer>
      )}
    </S.ChartDiv>
  );
};

export default MonthlyChart;
