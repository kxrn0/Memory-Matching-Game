import styled from "styled-components";

const SCNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .controls {
    display: flex;
    gap: 16px;
  }

  @media screen and (max-width: 500px) {
    .controls {
      display: none;
    }

    svg {
      transform: scale(0.6);
    }
  }
`;

export default SCNavbar;
