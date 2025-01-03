import styled from "styled-components";

export const TopContainer = styled.div`
  // margin-top: clamp(2rem, 18.83vw, 6rem);
`;

export const BackBtn = styled.button`
  position: absolute;
  top: clamp(2rem, 18.83vw, 6rem);

  background: none;
  border: none;

  img {
    width: 3rem;
  }
`;
