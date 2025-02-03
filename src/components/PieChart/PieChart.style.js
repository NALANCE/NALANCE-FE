import styled from "styled-components";

export const ChartContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  margin-top: ${(props) => (props.$marginTop && !props.$hasData ? props.$marginTop : "5rem")};
  margin-bottom: ${(props) => (props.$hasData ? "5rem" : "0rem")};
`;

export const ChartWrapper = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "27.24rem")};
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
`;

export const LegendWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CircleDiv = styled.div`
  width: 13px;
  height: 13px;
  background: ${(props) => props.color};
  border-radius: 50%;

  margin-right: 0.6rem;
`;

export const CategoryItem = styled.p`
  font-family: "Freesentation", sans-serif;
  font-size: 1.6rem;
`;
