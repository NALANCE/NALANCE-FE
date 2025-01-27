import React, { useState, useRef, useEffect } from "react";
import { IgrItemLegend } from "igniteui-react-charts";
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

const PieChart = ({ date }) => {
  const [data, setData] = useState(DAILY.result.data);

  // 비율이 0 이상인 데이터
  const filteredData = data.filter((item) => item.ratio > 0).map((item) => ({ ...item, label: `${item.ratio}%` }));

  // 비율이 0 이상인 데이터의 색상 추출
  const brushes = filteredData.map((item) => item.color);

  const chartRef = useRef(null); // 도넛 차트 컴포넌트를 참조
  const legendRef = useRef(null); // 범례 컴포넌트를 참조

  useEffect(() => {
    if (chartRef.current && legendRef.current) {
      chartRef.current.actualSeries[0].legend = legendRef.current;
    }
  }, []);

  // 클릭하면 폭발 이벤트
  const onSliceClick = (s, e) => {
    e.isExploded = !e.isExploded;
  };

  return (
    <S.ChartContainer>
      <S.ChartWrapper>
        <IgrDoughnutChart
          dataSource={filteredData} // 필터링된 데이터
          ref={chartRef}
          width="100%"
          height="100%"
          allowSliceSelection="true" // 차트 조각 선택할 수 있도록
          innerExtent={0.15} // 도넛 차트의 중앙 원 크기
          sliceClick={onSliceClick} // 클릭 이벤트
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
            allowSliceExplosion="true" // 클릭 이벤트로 조각 폭발 가능
          />
        </IgrDoughnutChart>
      </S.ChartWrapper>

      {/* 범례 */}
      <S.LegendContainer itemCount={data.length}>
        {data.map((item) => {
          return (
            <S.LegendWrapper key={item.category}>
              <S.CircleDiv color={item.color} />
              <S.CategoryItem>
                {item.category.length > 2 ? `${item.category.slice(0, 2)}...` : item.category}
              </S.CategoryItem>
            </S.LegendWrapper>
          );
        })}
      </S.LegendContainer>
    </S.ChartContainer>
  );
};

export default PieChart;
