import { DAILY } from "../../../public/data/dailyDummy.js";
import ReactApexChart from "react-apexcharts";
import * as S from "./PieChart.style.js";
import { useEffect, useState } from "react";
import Percentage from "../Percentage/Percentage.jsx";
import { path } from "framer-motion/client";

const PieChart = ({ date, width = "300", height = "300", $marginTop = "0.4rem" }) => {
  const [chartData, setChartData] = useState({ series: [], labels: [] });
  const [colors, setColors] = useState(["#555555"]); // 기본 색상
  const [selectedIndex, setSelectedIndex] = useState(null); // 클릭한 인덱스를 저장

  useEffect(() => {
    // 날짜 변경 시 selectedIndex 초기화
    setSelectedIndex(null);
  }, [date]); // date가 변경될 때마다 selectedIndex 초기화

  useEffect(() => {
    // 날짜 변경시 데이터 업데이트하기
    const fetchDataForDate = () => {
      const formattedDate = date; // 문자열 ex)2025-01-17

      // 해당 날짜에 데이터가 있으면 차트 데이터 업데이트, 없으면 기본 데이터 사용
      if (DAILY.date === formattedDate) {
        // series가 0이 아닌 데이터로 새로운 배열 생성
        const filteredData = DAILY.graphData.data
          .map((value, index) => ({ value, label: DAILY.graphData.labels[index] }))
          .filter((item) => item.value > 0);

        const filteredSeries = filteredData.map((item) => item.value);
        const filteredLabels = filteredData.map((item) => item.label);

        // console.log("filteredSeries", filteredSeries);
        // console.log("filteredLabels", filteredLabels);

        setChartData({
          series: filteredSeries, // 데이터 부분
          labels: filteredLabels, // 라벨 부분
        });

        // console.log("chartData", chartData);

        setColors(["#7DA7D9", "#ADC49E", "#F8A19A"]);
      } else {
        // 데이터가 없으면 (날짜가 다르면)
        setChartData({
          series: [], // 기본 데이터
          labels: [""], // 기본 라벨
        });
        setColors(["#555555"]);
      }
    };

    fetchDataForDate(); // date가 변경될 때 데이터가 업데이트 됨
  }, [date]); // date가 변경되면 fetchDataForDate가 실행됨

  //const colors = DAILY && DAILY.graphData && DAILY.graphData.data ? ["#7DA7D9", "#ADC49E", "#F8A19A"] : ["#555555"]; // 데이터 없는 경우 #555555

  const Daily = {
    series: chartData.series.length > 0 ? chartData.series : [100], // 더미데이터의 퍼센트 값
    options: {
      tooltip: {
        enabled: false, // 툴팁 완전히 비활성화
      },
      states: {
        hover: {
          filter: {
            type: "none", // hover시 효과 적용되지 않도록
          },
        },
      },
      chart: {
        type: "donut",
        events: {
          dataPointSelection: (event, chartContext, config) => {
            // console.log("config", config);
            const clickedIndex = config.dataPointIndex;
            setSelectedIndex(clickedIndex);
            //console.log("clickedIndex", clickedIndex);

            // 클릭된 부분에만 그림자 효과 적용
            const seriesGroups = document.querySelectorAll("g.apexcharts-series");
            seriesGroups.forEach((group, index) => {
              const path = group.querySelector("path"); // 각 데이터 포인트에 해당하는 path
              if (!path) return; // path가 없는 경우 건너뜀

              // 클릭 시 filter 제거
              setTimeout(() => {
                const seriesGroups = document.querySelectorAll("g.apexcharts-series");

                seriesGroups.forEach((group, index) => {
                  const path = group.querySelector("path"); // 그룹 내부의 path 요소 선택
                  if (!path) return; // path가 없는 경우 건너뜀

                  if (index === clickedIndex) {
                    path.setAttribute("filter", "url(#selectedShadow)");
                    //path.setAttribute("stroke", "none"); // Stroke 유지
                  } else {
                    path.removeAttribute("filter");
                  }
                });
              });
            }, 0); // ApexCharts 렌더링 직후 실행
          },
        },
        animations: {
          enabled: false, // 애니메이션 비활성화
        },
      },
      legend: {
        show: false,
      },
      responsive: [
        // 반응형 디자인
        {
          breakpoint: 480, // 480px 이하일 때
          options: {
            chart: {
              // width: 300, // 차트의 너비 300px으로
            },
          },
        },
      ],
      plotOptions: {
        // 차트 데이터 시각화 관련
        pie: {
          expandOnClick: false,
          donut: {
            size: "15%", // 차트 가운데 크기
            labels: {
              show: false, // 클릭시 차트 중앙에 라벨 표시
            },
          },
        },
      },
      dataLabels: {
        enabled: true, // 그래프 위에 값 나타나도록

        // 클릭된 것만 label뜨도록
        formatter: (value, { seriesIndex }) => {
          if (seriesIndex === selectedIndex && chartData.series.length > 0) {
            // console.log("selectedIndex", selectedIndex);
            const labelName = chartData.labels[seriesIndex]; // 선택된 label 이름
            return `${value}%`;
          }
          return "";
        },

        style: {
          colors: ["white"], // 글자 색상
          fontSize: "1.6rem", // 글자 크기
          fontWeight: 600, // 글자 굵기
        },
      },
      fill: {
        opacity: 1,
        colors: colors, // colors로 색상
      },
      stroke: {
        show: true, // 그래프 간 간격
        width: chartData.series.length > 0 ? 5 : 0,
      },
    },

    labels: DAILY && DAILY.graphData && DAILY.graphData.data ? DAILY.graphData.labels : [""], // series 배열의 각 값과 연결
    title: {
      text: "하루 통계",
      align: "center",
    },
  };

  return (
    <S.ChartWrapper $marginTop={$marginTop}>
      <svg width="0" height="0">
        <defs>
          <filter id="selectedShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#000" floodOpacity="0.5" />
          </filter>
        </defs>
      </svg>

      <ReactApexChart
        key={JSON.stringify(Daily.series)}
        options={Daily.options}
        series={Daily.series}
        type="donut"
        width={width}
        height={height}
        className="chart"
      />
    </S.ChartWrapper>
  );
};

export default PieChart;
