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

  box-sizing: border-box;
  box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.1);

  button {
    background: none;
    border: none;
  }

  p {
    font-family: "Freesentation", sans-serif;
    font-weight: 800;
    font-size: 3rem;
    margin-left: 2.1rem;
    margin-right: 2.1rem;
  }
`;