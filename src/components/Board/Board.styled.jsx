import styled from "styled-components";

const SCBoard = styled.section`
  display: grid;
  grid-template-columns: repeat(var(--length), 1fr);
  grid-template-rows: repeat(var(--length), 1fr);
  gap: var(--gap);

  @media screen and (max-width: 500px) {
    /* display: none; */
    /* transform: scale(.57); */
  }
`;

export default SCBoard;
