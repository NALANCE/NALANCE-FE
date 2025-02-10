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

  margin-top: clamp(4.1rem, 8vh, 9.7rem);

  box-sizing: border-box;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  button {
    box-sizing: border-box;

    background: none;
    outline: none;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }

  p {
    font-family: "Freesentation", sans-serif;
    font-size: 3rem;
    color: #2f2f2f;
    font-style: normal;
    font-weight: 770;
    line-height: 40px;
    letter-spacing: 1.2px;

    margin: 0 1.1rem;
  }
`;
