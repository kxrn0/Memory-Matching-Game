import styled from "styled-components";

const SCGame = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 105px;

  @media screen and (max-width: 1000px) {
    gap: 150px;
  }

  @media screen and (max-width: 500px) {
    gap: 80px;
  }
`;

export default SCGame;
