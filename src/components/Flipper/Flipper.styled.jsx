import styled from "styled-components";

const SCFlipper = styled.div`
  background: transparent;
  width: 82px;
  height: 82px;
  perspective: 1000px;

  .content {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    box-shadow: 5px 5px 10px 5px purple;

    .front,
    .back {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
      display: grid;
      place-items: center;
    }

    .front {
      background: greenyellow;
    }

    .back {
      background: pink;
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
