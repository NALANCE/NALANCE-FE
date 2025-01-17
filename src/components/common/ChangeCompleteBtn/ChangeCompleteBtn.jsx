import React from "react";
import * as S from "./ChangeCompleteBtn.style";

const ChangeCompleteBtn = ({ onClick, disabled }) => {
  return (
    <S.Button onClick={onClick} disabled={disabled}>
      변경 완료
    </S.Button>
  );
};

export default ChangeCompleteBtn;
