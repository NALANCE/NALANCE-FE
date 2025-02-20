import * as S from "components/ShowDate/ShowDate.style";
import styled from "styled-components";

export const DateContainer = styled(S.DateContainer)`
  width: 18.7rem;
`;

export const Line = styled.div`
  display: none;
  width: 32.5rem;
  height: 0.3px;
  background: #d9d9d9;

  @media all and (min-width: 769px) and (orientation: landscape) {
    display: block;
  }
`;

export const ItemWrapper = styled.div`
  @media all and (min-width: 769px) and (orientation: landscape) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.3rem;
    margin-bottom: 2.6rem;
  }
`;
