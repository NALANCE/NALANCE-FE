import React, { useState, useRef, useEffect } from "react";
import { IgrItemLegend } from "igniteui-react-charts";
import { IgrItemLegendModule } from "igniteui-react-charts";
import { IgrDoughnutChart } from "igniteui-react-charts";
import { IgrDoughnutChartModule } from "igniteui-react-charts";
import { IgrRingSeriesModule } from "igniteui-react-charts";
import { IgrRingSeries } from "igniteui-react-charts";

import { DAILY } from "../../../public/data/dailyDummy.js";
import ReactApexChart from "react-apexcharts";

import * as S from "./PieChart.style";

// 모듈 사용할 수 있도록 가져옴
IgrDoughnutChartModule.register();
IgrRingSeriesModule.register();
IgrItemLegendModule.register();

const Daily = {
  series: [100], // 더미데이터의 퍼센트 값
  options: {
    tooltip: {
      enabled: false, // 툴팁 완전히 비활성화
    },
    chart: {
      type: "donut",
      animations: {
        enabled: false, // 애니메이션 비활성화
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      // 차트 데이터 시각화 관련
      pie: {
        expandOnClick: false,
        donut: {
          size: "25%", // 차트 가운데 크기
          labels: {
            show: false, // 클릭시 차트 중앙에 라벨 표시
          },
        },
      },
    },
    dataLabels: {
      enabled: false, // 그래프 위에 값 나타나도록
    },
    fill: {
      opacity: 1,
      colors: "#555", // colors로 색상
    },
    stroke: {
      show: true, // 그래프 간 간격
      width: 0,
    },
  },

  labels: [""], // series 배열의 각 값과 연결
};

const PieChart = ({ date, width, height, marginTop }) => {
  const [data, setData] = useState(DAILY.result.data);

  // 비율이 0 이상인 데이터
  const filteredData = data.filter((item) => item.ratio > 0).map((item) => ({ ...item, label: `${item.ratio}%` }));

  // 비율이 0 이상인 데이터의 색상 추출
  const brushes = filteredData.map((item) => item.color);

  const chartRef = useRef(null); // 도넛 차트 컴포넌트를 참조
  const legendRef = useRef(null); // 범례 컴포넌트를 참조

  useEffect(() => {
    if (DAILY?.result?.date === date) {
      setData(DAILY.result.data);
    } else {
      setData([]);
    }
  }, [date]);

  useEffect(() => {
    if (chartRef.current && legendRef.current) {
      chartRef.current.actualSeries[0].legend = legendRef.current;
    }
  }, []);

  // 클릭하면 폭발 이벤트
  // const onSliceClick = (s, e) => {
  //   e.isExploded = !e.isExploded;
  // };

  return (
    <>
      {data.length > 0 ? (
        <S.ChartContainer>
          <S.ChartWrapper>
            <IgrDoughnutChart
              dataSource={filteredData} // 필터링된 데이터
              ref={chartRef}
              width="100%"
              height="100%"
              allowSliceSelection="false" // 차트 조각 선택할 수 있도록
              innerExtent={0.15} // 도넛 차트의 중앙 원 크기
              startAngle={-60} // 시작 각도
            >
              <IgrRingSeries
                name="ring1"
                dataSource={filteredData}
                valueMemberPath="ratio" // 표시할 값
                labelMemberPath="label" // 라벨
                legendLabelMemberPath="category" // 범례
                brushes={brushes} // 데이터에서 추출한 색상 이용
                labelsPosition="OutsideEnd" // 라벨을 조각 외부 끝에 위치하도록
                labelExtent={30} // 라벨과 차트 중심 사이의 거리
                radiusFactor={0.7} // 도넛 차트의 크기 비율
                explodedRadius={0.1} // 폭발된 조각의 중심에서 떨어진 거리
                explodedSlices="1" // 초기에 폭발 상태인 조각
                allowSliceExplosion="false" // 클릭 이벤트로 조각 폭발 가능
              />
            </IgrDoughnutChart>
          </S.ChartWrapper>
        </S.ChartContainer>
      ) : (
        <ReactApexChart
          options={Daily.options}
          series={Daily.series}
          type="donut"
          width={width || "227px"}
          height={height || "227px"}
          className="chart"
          style={{ marginTop: marginTop || "48px" }}
        />
      )}
    </>
  );
};

export default PieChart;
