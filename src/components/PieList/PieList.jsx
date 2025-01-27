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
    if (DAILY.result.date === date) {
      setCategoryRates(DAILY.result.data); // 일치하면 categoryRates를 업데이트
    } else {
      setCategoryRates([]); // 해당 날짜가 없으면 빈 배열
    }
  }, [date]); // date가 변경될 때마다 실행

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
          <Warning />
        </S.ItemContainer>
      )}
    </>
  );
};

export default PieList;
