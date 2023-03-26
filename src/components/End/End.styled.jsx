import styled from "styled-components";

const SCEnd = styled.div`
  background: var(--white);
  padding: 50px 56px 69px 56px;
  border-radius: 20px;

  .h1 {
    color: var(--pseudo-black);
  }

  .results {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .body {
    color: var(--blue);
  }

  .h2 {
    color: var(--dark-blue-gray);
  }

  .body.title {
    margin-top: 16px;
    margin-bottom: 40px;

    @media screen and (max-width: 500px) {
      margin-top: 10px;
      margin-bottom: 24px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      background: var(--dark-white);
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 542px;
      padding: 16px 32px;
      border-radius: 10px;

      &.winner {
        background: var(--pseudo-black);

        .body,
        .h2 {
          color: var(--white);
        }
      }

      @media screen and (max-width: 500px) {
        width: 280px;
        padding: 16px;
      }
    }
  }

  .controls {
    margin-top: 56px;
    display: flex;
    gap: 14px;

    button {
      flex: 1 1 0;
    }

    @media screen and (max-width: 500px) {
      margin-top: 24px;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 24px;
    padding-top: 32px;
    border-radius: 10px;
  }
`;

export default SCEnd;
