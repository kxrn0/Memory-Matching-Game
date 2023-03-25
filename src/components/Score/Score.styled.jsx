import styled from "styled-components";

const SCScore = styled.section`
  ul {
    display: flex;
    gap: 30px;

    @media screen and (max-width: 1000px) {
      gap: 10px;
    }

    @media screen and (max-width: 500px) {
      gap: 24px;
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;

    li {
      flex-grow: 1;
    }
  }
`;

export default SCScore;
