import { DAILY } from "../../../public/data/dailyDummy.js";
import Warning from "components/Warning/Warning";
import * as S from "./PieList.style.js";

const PieList = () => {
  // DAILY.categoryRates가 비어있는지 확인
  const categoryRates = DAILY?.categoryRates || [];

  // 가장 적은 비율의 항목 찾기 (categoryRates가 비어있지 않을 때만)
  const smallestCategory =
    categoryRates.length > 0
      ? categoryRates.reduce((min, item) => (item.percentage < min.percentage ? item : min))
      : null; // 비어 있으면 null 처리

  console.log(smallestCategory);

  return (
    <>
      <S.ItemContainer>
        {categoryRates.length === 0 ? (
          <div>데이터가 없습니다.</div> // 데이터가 없으면 기본 메시지 표시
        ) : (
          categoryRates.map((item) => (
            <S.ItemWrapper key={item.category}>
              <S.CategoryItem>{item.category}</S.CategoryItem>
              <S.CategoryItem>{item.percentage}%</S.CategoryItem>
              {item === smallestCategory && <Warning />}
            </S.ItemWrapper>
          ))
        )}
      </S.ItemContainer>
    </>
  );
};

export default PieList;
