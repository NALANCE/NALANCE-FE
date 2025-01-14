import { DAILY } from "../../../public/data/dailyDummy.js";
import ReactApexChart from "react-apexcharts";

const Daily = {
  series: [37.4, 16.4, 46.2],
  options: {
    chart: {
      type: "donut",
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
            width: 300, // 차트의 너비 300px으로
          },
        },
      },
    ],
    plotOptions: {
      // 차트 데이터 시각화 관련
      pie: {
        expandOnClick: true,
        active: {
          fill: {
            opaity: 0,
          },
        },
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
      colors: ["#7DA7D9", "#ADC49E", "#F8A19A"],
    },
    stroke: {
      show: true,
      width: 5,
    },
  },
  labels: ["가족", "친구", "학업"], // series 배열의 각 값과 연결
  title: {
    text: "이벤트별 통계",
    align: "center",
  },
};

const PieChart = () => {
  console.log("데일리", DAILY);

  return (
    <>
      <div>{DAILY.results}</div>
      <ReactApexChart options={Daily.options} series={Daily.series} type="donut" width="500" />
    </>
  );
};

export default PieChart;
