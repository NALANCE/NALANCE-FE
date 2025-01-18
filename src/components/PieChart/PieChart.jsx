import { DAILY } from "../../../public/data/dailyDummy.js";
import ReactApexChart from "react-apexcharts";
import * as S from "./PieChart.style.js";
import { useEffect, useState } from "react";
import { label, legend } from "framer-motion/client";
import Percentage from "../Percentage/Percentage.jsx";

const PieChart = ({ date, width = "300", height = "300", marginTop = "0.4rem" }) => {
  const [chartData, setChartData] = useState({ series: [], labels: [] });
  const [colors, setColors] = useState(["#555555"]); // 기본 색상
  const [selectedCategory, setSelectedCategory] = useState(null); // 클릭된 카테고리

  useEffect(() => {
    // 날짜 변경시 데이터 업데이트하기
    const fetchDataForDate = () => {
      const formattedDate = date; // 문자열 ex)2025-01-17

      // 해당 날짜에 데이터가 있으면 차트 데이터 업데이트, 없으면 기본 데이터 사용
      if (DAILY.date === formattedDate) {
        setChartData({
          series: DAILY.graphData.data, // 더미 데이터의 데이터 부분
          labels: DAILY.graphData.labels, // 더미 데이터의 라벨 부분
        });
        setColors(["#7DA7D9", "#ADC49E", "#F8A19A"]);
      } else {
        // 데이터가 없으면 (날짜가 다르면)
        setChartData({
          series: [], // 기본 데이터
          labels: ["기본"], // 기본 라벨
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
            // 클릭 시 filter 제거
            setTimeout(() => {
              const paths = document.querySelectorAll("path[filter]");
              paths.forEach((path) => {
                path.removeAttribute("filter");
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
          donut: {
            size: "15%", // 차트 가운데 크기
            labels: {
              show: false, // 클릭시 차트 중앙에 라벨 표시
            },
          },
        },
      },
      dataLabels: {
        enabled: false, // 그래프 위에 값 숨기기
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
    labels: DAILY && DAILY.graphData && DAILY.graphData.data ? DAILY.graphData.data : [""], // series 배열의 각 값과 연결
    title: {
      text: "하루 통계",
      align: "center",
    },
  };

  return (
    <S.ChartWrapper marginTop={marginTop}>
      <ReactApexChart
        options={Daily.options}
        series={Daily.series}
        type="donut"
        width={width}
        height={height}
        className="chart"
      />
      {selectedCategory && <Percentage percentage={selectedCategory.percentage} />}
    </S.ChartWrapper>
  );
};

export default PieChart;
