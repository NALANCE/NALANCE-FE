import styled from "styled-components";
import * as S from "components/PieList/PieList.style.js";

export const StyledItemWrapper = styled(S.ItemWrapper)`
  // justify-content: center;
  width: 20rem;
`;

export const StyledItemContainer = styled(S.ItemContainer)`
  width: 100%;
  height: 15rem;

  margin-top: 3rem;
`;

export const BarWrapper = styled.div`
  width: 75px;

  margin-left: -50px;
  text-align: start;

  display: flex;
  align-items: center;
`;

export const Bar = styled.div`
  width: ${(props) => props.width};
  height: 30px;

  display: flex;
  align-items: center;
`;

export const StyledCategoryItem = styled(S.CategoryItem)`
  width: 100px;
  text-align: start;
`;
