import styled from "styled-components";

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 25rem;
  height: 4.9rem;

  border: 0.2px solid #2f2f2f;
  border-radius: 10px;
  padding: 1rem;

  margin-top: clamp(2rem, 15vw, 6rem);

  box-sizing: border-box;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  button {
    background: none;
    border: none;

    cursor: pointer;
  }

  p {
    font-family: "Freesentation", sans-serif;
    font-weight: 800;
    font-size: 3rem;
    margin-left: 2.1rem;
    margin-right: 2.1rem;
  }
`;
