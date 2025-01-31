import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ItemWrapper = styled.div`
  border-bottom: 0.5px solid #868686;
  width: 22.3rem;
  height: 4.4rem;
  flex-shrink: 0;

  padding: 2px 10px;

  display: flex;
  align-items: center;

  .itemBar {
    width: 156px;
  }
`;

export const NoItemWrapper = styled.div`
  border-bottom: 0.5px solid #868686;
  width: 22.3rem;
  height: 4.4rem;

  padding: 2px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3.5rem;
`;

export const CategoryItem = styled.span`
  font-family: "Freesentation", sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 30px;

  margin-right: 0.5rem;
`;

export const CatWrapper = styled.div`
  margin-top: 2rem;
`;
