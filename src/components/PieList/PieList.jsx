import { DAILY } from "../../../public/data/dailyDummy.js";
import * as S from "./PieList.style.js";

const PieList = () => {
  console.log(DAILY);

  return (
    <>
      <S.ItemContainer>
        {DAILY.categoryRates.map((item) => (
          <S.ItemWrapper key={item.category}>
            <S.CategoryItem>{item.category}</S.CategoryItem>
            <S.CategoryItem>{item.percentage}%</S.CategoryItem>
          </S.ItemWrapper>
        ))}
      </S.ItemContainer>
    </>
  );
};

export default PieList;
