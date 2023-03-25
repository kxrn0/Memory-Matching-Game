import styled from "styled-components";

const SCPad = styled.div`
  background: var(--dark-white);
  width: 255px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  padding-left: 20px;
  border-radius: 10px;
  position: relative;
  transition: background-color 1s;

  .label {
    color: var(--pseudo-black);
    font-size: 13px;
    font-family: atk;
    line-height: 16px;
    letter-spacing: 5px;
    position: absolute;
    top: 95px;
    right: 50%;
    width: max-content;
    transform: translateX(50%);
    opacity: 0;
    transition: opacity 1s;
  }

  .body {
    color: var(--blue);
  }

  ::before {
    content: "";
    position: absolute;
    bottom: calc(100% - 1px);
    right: 50%;
    transform: translateX(50%);
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid var(--orange);
    opacity: 0;
    transition: opacity 1s;
  }

  &.turn {
    background: var(--orange);
    color: var(--white);

    .label {
      opacity: 1;
    }

    .body {
      color: var(--white);
    }

    ::before {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 165px;
    height: 80px;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    padding: 14px;
    padding-right: 16px;
    padding-bottom: 12px;

    ::before {
      border-left-width: 12px;
      border-right-width: 12px;
      border-bottom-width: 12px;
    }
  }

  @media screen and (max-width: 500px) {
    width: auto;
    flex-grow: 1;
    /* width: 64px; */
    height: 70px;
    padding: 10px 15px;
    align-items: center;
  }
`;

export default SCPad;
