import { DAILY } from "../../../public/data/dailyDummy.js";
import Warning from "components/Warning/Warning";
import PieChart from "components/PieChart/PieChart";
import * as S from "./PieList.style.js";
import angryCatBig from "assets/icons/angryCatBig.svg";
import { useEffect, useState } from "react";

import * as S_ from "../PieChart/PieChart.style.js";

const PieList = ({ date, data, balance }) => {
  const [categoryRates, setCategoryRates] = useState([]);

  // const [data, setData] = useState(DAILY.result.data);

  // 비율이 0 이상인 데이터
  const filteredData =
    data && data.filter((item) => item.ratio > 0).map((item) => ({ ...item, label: `${item.ratio}%` }));

  // 날짜가 변경될 때마다 categoryRates를 업데이트
  useEffect(() => {
    if (data) {
      setCategoryRates(data); // 데이터를 받아오면 categoryRates를 업데이트
    }
    //console.log(1);
  }, [data]); // data가 변경될 때마다 실행

  return (
    <>
      {/* 데이터 없는 경우 */}
      {categoryRates.length === 0 ? (
        <S.NoItemContainer>
          <S.NoItemWrapper>
            <S.CategoryItem>기록된 카테고리 내용이 없습니다.</S.CategoryItem>
          </S.NoItemWrapper>

          <S.CatWrapper>
            <object data={angryCatBig} />
          </S.CatWrapper>

          <S.PieChartWrapper>
            <PieChart date={date} width={"198px"} height={"265px"} $marginTop={"0"} label={true} data={data} />
          </S.PieChartWrapper>
        </S.NoItemContainer>
      ) : (
        <S.ItemContainer>
          {/* 범례 */}
          <S.LegendContainer $itemCount={data.length}>
            {data.map((item, index) => {
              return (
                <S_.LegendWrapper key={`${item.category}-${Math.random()}`}>
                  <S_.CircleDiv color={item.color} />
                  <S_.CategoryItem>
                    {item.category.length > 2 ? `${item.category.slice(0, 2)}...` : item.category}
                  </S_.CategoryItem>
                </S_.LegendWrapper>
              );
            })}
          </S.LegendContainer>

          <S.PieChartWrapper>
            <PieChart date={date} width={"198px"} height={"265px"} $marginTop={"0"} label={true} data={data} />
          </S.PieChartWrapper>

          <S.WarningWrapper>
            <Warning date={date} balance={balance} />
          </S.WarningWrapper>
        </S.ItemContainer>
      )}
    </>
  );
};

export default PieList;
