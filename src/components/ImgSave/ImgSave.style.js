import styled from "styled-components";

export const BtnWrapper = styled.div`
  position: fixed;
  bottom: 5%;
  /* left: clamp(2rem, 80%, 100%); */
  right: 4%;

  cursor: pointer;

  width: 3.6rem;
  > img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
