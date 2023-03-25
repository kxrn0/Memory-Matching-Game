import styled from "styled-components";

const SCStart = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 78px;

  svg {
    path {
      fill: var(--white);
    }

    :hover {
      path {
        fill: #ff2525;
      }
    }
  }

  section {
    background: var(--white);
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 56px;
    border-radius: 20px;
    width: 655px;

    fieldset {
      padding-top: 16px;

      legend {
        color: var(--blue);
      }

      ul {
        display: flex;
        align-items: center;
        gap: 30px;
        li {
          background: var(--gray);
          color: var(--white);
          font-family: atk;
          font-size: 26px;
          line-height: 32px;
          text-transform: capitalize;
          transition: background-color 0.33s;
          border-radius: 100px;
          flex: 1 1 0;

          label {
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
            padding: 10px;
            display: grid;
            place-items: center;

            span {
              position: relative;
            }

            input[type="radio"] {
              background: var(--dark-blue-gray);
              appearance: none;
              position: absolute;
              inset: 0;
              opacity: 0;
              transition: opacity 0.33s;
              border-radius: 100px;

              :checked {
                opacity: 1;
              }
            }
          }

          @media (hover: hover) {
            :hover {
              background: var(--light-blue);
            }
          }
        }
      }

      :nth-child(2) {
        ul {
          gap: 20px;
        }
      }
    }

    button {
      background: var(--orange);
      color: var(--white);
      padding: 15px;
      border: none;
      border-radius: 100px;
      transition: background-color 0.33s;

      @media (hover: hover) {
        :hover {
          background: var(--orang);
        }
      }
    }
  }
`;

export default SCStart;
