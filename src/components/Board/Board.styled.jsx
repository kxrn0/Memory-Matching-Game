import styled from "styled-components";

const SCBoard = styled.section`
  background: aliceblue;
  display: grid;
  grid-template-columns: repeat(var(--length), 1fr);
  grid-template-rows: repeat(var(--length), 1fr);
`;

export default SCBoard;
