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

  margin-top: 1.2vh;
`;

export const CategoryItem = styled.span`
  font-family: "Freesentation", sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 30px;

  color: #2f2f2f;
`;

export const CatWrapper = styled.div`
  margin-top: 2.1rem;

  width: clamp(5.5rem, 21vw, 9.2rem);

  > img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const LegendContainer = styled.div`
  display: ${(props) => (props.$itemCount < 5 ? "flex" : "grid")};
  grid-template-columns: repeat(5, 1fr);
  gap: 10px 0.3rem;

  overflow: scroll;
  width: 30.2rem;
  height: 6.2rem;

  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-right: ${(props) => (props.$itemCount < 5 ? "0.3rem" : "0")};

  &::-webkit-scrollbar {
    width: 0.2rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #868686;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }

  order: 1;

  @media all and (min-width: 769px) and (orientation: landscape) {
    order: 3;
  }
`;

export const PieChartWrapper = styled.div`
  display: none;

  @media all and (min-width: 769px) and (orientation: landscape) {
    display: block;
    order: 2;
  }
`;

export const WarningWrapper = styled.div`
  order: 3;

  @media all and (min-width: 769px) and (orientation: landscape) {
    order: 1;
  }
`;
