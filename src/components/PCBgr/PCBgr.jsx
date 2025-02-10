import bgr1 from "assets/icons/icon_bgr1.svg";
import bgr2 from "assets/icons/icon_bgr2.svg";
import bgr3 from "assets/icons/icon_bgr3.svg";
import bgr4 from "assets/icons/icon_bgr4.svg";
import bgr5 from "assets/icons/icon_bgr5.svg";
import bgr6 from "assets/icons/icon_bgr6.svg";
import bgr7 from "assets/icons/icon_bgr7.svg";

import * as S from "./PCBgr.style";

const PCBgr = ({ $top = 1 }) => {
  return (
    <>
      <S.BgrWrapper src={bgr1} $top={$top * 33.7 + "%"} $left={"7.1%"} />
      <S.BgrWrapper src={bgr2} $top={$top * 36.2 + "%"} $left={"12.2%"} />
      <S.BgrWrapper src={bgr3} $top={$top * 26 + "%"} $left={"18.9%"} />
      <S.BgrWrapper src={bgr4} $top={$top * 35 + "%"} $left={"24.8%"} />
      <S.BgrWrapper src={bgr5} $top={$top * 36.2 + "%"} $left={"71.8%"} />
      <S.BgrWrapper src={bgr6} $top={$top * 26.8 + "%"} $left={"77.57%"} />
      <S.BgrWrapper src={bgr7} $top={$top * 28.4 + "%"} $left={"84.45%"} />
    </>
  );
};

export default PCBgr;
