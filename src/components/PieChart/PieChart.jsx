import React, { useState, useRef, useEffect } from "react";

import { IgrItemLegendModule } from "igniteui-react-charts";
import { IgrDoughnutChart } from "igniteui-react-charts";
import { IgrDoughnutChartModule } from "igniteui-react-charts";
import { IgrRingSeriesModule } from "igniteui-react-charts";
import { IgrRingSeries } from "igniteui-react-charts";

import { DAILY } from "../../../public/data/dailyDummy.js";

import * as S from "./PieChart.style";

// 모듈 사용할 수 있도록 가져옴
IgrDoughnutChartModule.register();
IgrRingSeriesModule.register();
IgrItemLegendModule.register();

const PieChart = ({ date, width, height, $marginTop, label = true, data = [] }) => {
  // 데이터를 담기 위해
  //const [data, setData] = useState(DAILY.result.data);

  if (!data) console.log("데이터가 없음");

  // 비율이 0 이상인 데이터
  const filteredData = data
    .filter((item) => item.ratio > 0)
    .map((item) => ({ ...item, label: `${item.ratio.toFixed(1)}%` }));

  // 데이터 없을 경우 빈 그래프 나타내기 위한 더미 데이터
  const displayData = filteredData.length > 0 ? filteredData : [{ ratio: 100, color: "#555555", label: "" }];

  // 비율이 0 이상인 데이터의 색상 추출
  const brushes = displayData.map((item) => item.color);

  const chartRef = useRef(null); // 도넛 차트 컴포넌트를 참조
  const legendRef = useRef(null); // 범례 컴포넌트를 참조

  useEffect(() => {
    if (chartRef.current && legendRef.current) {
      chartRef.current.actualSeries[0].legend = legendRef.current;
    }
  }, []);

  return (
    <>
      <S.ChartContainer $hasData={filteredData.length > 0} $marginTop={$marginTop}>
        <S.ChartWrapper height={height}>
          <IgrDoughnutChart
            dataSource={displayData} // 필터링된 데이터
            ref={chartRef}
            width="100%"
            height="100%"
            allowSliceSelection="false" // 차트 조각 선택할 수 있도록
            innerExtent={filteredData.length > 0 ? 0.15 : 0.25} // 도넛 차트의 중앙 원 크기
            startAngle={-60} // 시작 각도
          >
            <IgrRingSeries
              name="ring1"
              dataSource={displayData}
              valueMemberPath="ratio" // 표시할 값
              labelMemberPath="label" // 라벨
              legendLabelMemberPath="category" // 범례
              brushes={brushes} // 데이터에서 추출한 색상 이용
              labelsPosition={filteredData.length > 0 && label ? "OutsideEnd" : "None"} // 라벨을 조각 외부 끝에 위치하도록
              labelExtent={20} // 라벨과 차트 중심 사이의 거리
              radiusFactor={0.7} // 도넛 차트의 크기 비율
              allowSliceExplosion="false" // 클릭 이벤트로 조각 폭발 가능
            />
          </IgrDoughnutChart>
        </S.ChartWrapper>
      </S.ChartContainer>
    </>
  );
};

export default PieChart;
