import { DAILY } from "../../../public/data/dailyDummy.js";
import ReactApexChart from "react-apexcharts";
import * as S from "./PieChart.style.js";

const PieChart = () => {
  const colors = DAILY && DAILY.graphData && DAILY.graphData.data ? ["#7DA7D9", "#ADC49E", "#F8A19A"] : ["#555555"]; // 데이터 없는 경우 #555555

  const Daily = {
    series: DAILY && DAILY.graphData && DAILY.graphData.data ? DAILY.graphData.data : [100], // 더미데이터의 퍼센트 값
    options: {
      chart: {
        type: "donut",
        events: {
          dataPointSelection: () => {
            // 클릭 시 filter 제거
            setTimeout(() => {
              const paths = document.querySelectorAll("path[filter]");
              paths.forEach((path) => {
                path.removeAttribute("filter");
              });
            }, 0); // ApexCharts 렌더링 직후 실행
          },
        },
      },
      legend: {
        show: false,
      },
      responsive: [
        // 반응형 디자인 추후 수정
        {
          breakpoint: 480, // 480px 이하일 때
          options: {
            chart: {
              width: 300, // 차트의 너비 300px으로
            },
          },
        },
      ],
      plotOptions: {
        // 차트 데이터 시각화 관련
        pie: {
          donut: {
            size: "10%", // 차트 가운데 크기
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
        colors: colors,
      },
      stroke: {
        show: true, // 그래프 간 간격
        width: DAILY && DAILY.graphData && DAILY.graphData.data ? 5 : 0,
      },
    },
    labels: DAILY && DAILY.graphData && DAILY.graphData.data ? DAILY.graphData.data : [""], // series 배열의 각 값과 연결
    title: {
      text: "이벤트별 통계",
      align: "center",
    },
  };

  console.log("데일리", DAILY);

  return (
    <S.ChartWrapper>
      {/* <div>{DAILY.results}</div> */}
      <ReactApexChart options={Daily.options} series={Daily.series} type="donut" width="500" className="chart" />
    </S.ChartWrapper>
  );
};

export default PieChart;
