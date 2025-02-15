import { DAILY } from "../../../public/data/dailyDummy.js";
import { useEffect, useState } from "react";
import Warning from "components/Warning/Warning";
import angryCatBig from "assets/icons/angryCatBig.svg";

import * as S from "./BarChart.style.js";
import * as S1 from "components/PieList/PieList.style";

export const COLORS = ["#7DA7D9", "#ADC49E", "#F8A19A"];

const BarChart = ({ date, data }) => {
  const [categoryRates, setCategoryRates] = useState([]);

  // 날짜가 변경될 때마다 categoryRates를 업데이트
  useEffect(() => {
    // 같은 날짜의 데이터가 있는지
    if (date) {
      setCategoryRates(data); // 일치하면 categoryRates를 업데이트
    } else {
      setCategoryRates([]); // 해당 날짜가 없으면 빈 배열
    }
  }, [date, data]); // date가 변경될 때마다 실행

  // 가장 적은 비율의 항목 찾기 (categoryRates가 비어있지 않을 때만)
  const smallestCategories =
    categoryRates.length > 0
      ? categoryRates.filter((item) => item.ratio === Math.min(...categoryRates.map((item) => item.ratio)))
      : []; // 비어 있으면 빈 배열 처리

  // 비율 모두 동일한지
  const allEqual = categoryRates.every((item) => item.ratio === categoryRates[0]?.ratio);

  // console.log("smallestCategories", smallestCategories);

  return (
    <>
      {/* 데이터 없는 경우 */}
      {categoryRates.length === 0 ? (
        <S1.NoItemContainer>
          <S1.NoItemWrapper>
            <S1.CategoryItem>기록된 카테고리 내용이 없습니다.</S1.CategoryItem>
          </S1.NoItemWrapper>
          <S1.CatWrapper>
            <img src={angryCatBig} />
          </S1.CatWrapper>
        </S1.NoItemContainer>
      ) : (
        <S.StyledItemContainer>
          {categoryRates.map((item) => (
            <S.StyledItemWrapper key={item.category}>
              <S.StyledCategoryItem>
                {/* 두글자까지 표시되도록*/}
                {item.category.length > 2 ? `${item.category.slice(0, 2)}...` : item.category}{" "}
              </S.StyledCategoryItem>

              <S.BarWrapper>
                <S.Bar width={`${item.ratio}%`} style={{ backgroundColor: item.color }}>
                  <S.StyledCategoryItem>{item.ratio.toFixed(1)}%</S.StyledCategoryItem>
                </S.Bar>
              </S.BarWrapper>

              {smallestCategories.some((category) => category.category === item.category) && !allEqual && (
                <Warning date={date} $isWarning={true} $monthly={true} />
              )}
            </S.StyledItemWrapper>
          ))}
        </S.StyledItemContainer>
      )}
    </>
  );
};

export default BarChart;
