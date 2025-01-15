import { DAILY } from "../../../public/data/dailyDummy.js";
import Warning from "components/Warning/Warning";
import * as S from "./PieList.style.js";

const PieList = () => {
  // 가장 적은 비율의 항목 찾기
  const smallestCategory = DAILY.categoryRates.reduce((min, item) => (item.percentage < min.percentage ? item : min));
  console.log(smallestCategory);

  return (
    <>
      <S.ItemContainer>
        {DAILY.categoryRates.map((item) => (
          <S.ItemWrapper key={item.category}>
            <S.CategoryItem>{item.category}</S.CategoryItem>
            <S.CategoryItem>{item.percentage}%</S.CategoryItem>
            {item === smallestCategory && <Warning />}
          </S.ItemWrapper>
        ))}
      </S.ItemContainer>
    </>
  );
};

export default PieList;
