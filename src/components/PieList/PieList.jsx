import { DAILY } from "../../../public/data/dailyDummy.js";
import Warning from "components/Warning/Warning";
import * as S from "./PieList.style.js";
import angryCatBig from "assets/icons/angryCatBig.svg";
import { useEffect, useState } from "react";

const PieList = ({ date }) => {
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
        <S.NoItemContainer>
          <S.NoItemWrapper>
            <S.CategoryItem>기록된 카테고리 내용이 없습니다.</S.CategoryItem>
          </S.NoItemWrapper>
          <S.CatWrapper>
            <img src={angryCatBig} />
          </S.CatWrapper>
        </S.NoItemContainer>
      ) : (
        <S.ItemContainer>
          {categoryRates.map((item) => (
            <S.ItemWrapper key={item.category}>
              <div className="itemBar">
                <S.CategoryItem>{item.category}</S.CategoryItem>
                <S.CategoryItem>{item.percentage}%</S.CategoryItem>
              </div>

              {smallestCategories.some((category) => category.category === item.category) && <Warning date={date} />}
            </S.ItemWrapper>
          ))}
        </S.ItemContainer>
      )}
    </>
  );
};

export default PieList;
