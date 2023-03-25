import styled from "styled-components";

const SCFlipper = styled.div`
  background: transparent;
  perspective: 1000px;

  .content {
    position: relative;
    width: var(--width);
    height: var(--width);
    transition: transform .33s;
    transform-style: preserve-3d;

    .front,
    .back {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
      display: grid;
      place-items: center;
      border-radius: 100%;
    }

    .front {
      background: var(--dark-blue-gray);
    }

    .back {
      background: var(--gray);
      color: var(--white);
      font-size: var(--size);
      font-family: atk;
      line-height: 70px;
      /* transform: rotateY(180deg); */
    }
  }

  &.flipped {
    .content {
      transform: rotateY(180deg);
    }
  }
`;

export default SCFlipper;
