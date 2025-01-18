import { DAILY } from "../../../public/data/dailyDummy.js";
import { useEffect, useState } from "react";
import Warning from "components/Warning/Warning";
import angryCatBig from "assets/icons/angryCatBig.svg";

import * as S from "./BarChart.style.js";
import * as S1 from "components/PieList/PieList.style";

export const COLORS = ["#7DA7D9", "#ADC49E", "#F8A19A"];

const BarChart = ({ date }) => {
  const [categoryRates, setCategoryRates] = useState([]);

  // 날짜가 변경될 때마다 categoryRates를 업데이트
  useEffect(() => {
    // 같은 날짜의 데이터가 있는지
    if (DAILY.date === date) {
      setCategoryRates(DAILY.categoryRates); // 일치하면 categoryRates를 업데이트
    } else {
      setCategoryRates([]); // 해당 날짜가 없으면 빈 배열
    }
  }, [date]); // date가 변경될 때마다 실행

  // 가장 적은 비율의 항목 찾기 (categoryRates가 비어있지 않을 때만)
  const smallestCategories =
    categoryRates.length > 0
      ? categoryRates.filter((item) => item.percentage === Math.min(...categoryRates.map((item) => item.percentage)))
      : []; // 비어 있으면 빈 배열 처리

  // console.log(smallestCategories);

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
          {categoryRates.map((item, index) => (
            <S.StyledItemWrapper key={item.category}>
              <S.StyledCategoryItem>{item.category}</S.StyledCategoryItem>

              <S.BarWrapper>
                <S.Bar
                  width={`${item.percentage}%`}
                  style={{ backgroundColor: COLORS[index % COLORS.length] }} // index로 COLORS 순환
                >
                  <S.StyledCategoryItem>{item.percentage}%</S.StyledCategoryItem>
                </S.Bar>
              </S.BarWrapper>

              {smallestCategories.some((category) => category.category === item.category) && <Warning right={"-5%"} />}
            </S.StyledItemWrapper>
          ))}
        </S.StyledItemContainer>
      )}
    </>
  );
};

export default BarChart;
