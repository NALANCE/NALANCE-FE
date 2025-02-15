import styled from "styled-components";

export const ChartDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;

  @media all and (min-width: 769px) and (orientation: landscape) {
    flex-direction: column;
  }
`;

export const Line = styled.div`
  background-color: #d9d9d9;

  width: 32.5rem;
  height: 0.03rem;

  margin-top: ${(props) => props.$marginTop};
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 3.6rem;
  gap: 0.6rem;

  margin-top: 2rem;

  cursor: pointer;

  position: relative;
  z-index: 100;

  /* filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25)); */

  > img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const ChartWrapper = styled.div`
  width: 200px;
  height: 200px;

  align-content: center;
  flex: 1;
  text-align: -webkit-center;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 99;

  @media all and (min-width: 769px) and (orientation: landscape) {
    width: 17vw;
    height: 17vw;
    min-width: 30rem;
  }
`;
