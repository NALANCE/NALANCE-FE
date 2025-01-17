import percengateShow from "assets/icons/percentageShow.svg";
import * as S from "./Percentage.style";

const Percentage = ({ Percentage }) => {
  return (
    <S.PercentageWrapper>
      <img src={percengateShow} alt="percentage" />
      <S.PercetageP>{Percentage}</S.PercetageP>
    </S.PercentageWrapper>
  );
};

export default Percentage;
