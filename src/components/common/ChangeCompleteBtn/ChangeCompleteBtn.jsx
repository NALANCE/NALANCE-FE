import React from "react";
import * as S from "./ChangeCompleteBtn.style";

const ChangeCompleteBtn = ({ onClick, disabled, marginTop}) => {
  return (
    <S.Button onClick={onClick} disabled={disabled} marginTop={marginTop}>
      변경 완료
    </S.Button>
  );
};

export default ChangeCompleteBtn;
