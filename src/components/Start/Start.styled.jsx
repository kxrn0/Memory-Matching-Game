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

    @media screen and (max-width: 500px) {
      transform: scale(0.8);
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

        @media screen and (max-width: 500px) {
          gap: 10px;
        }
      }

      :nth-child(2) {
        ul {
          gap: 20px;

          @media screen and (max-width: 500px) {
            gap: 10px;
          }
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

    @media screen and (max-width: 500px) {
      width: 330px;
      padding: 24px;
      border-radius: 10px;
    }
  }

  @media screen and (max-width: 500px) {
    gap: 45px;
  }
`;

export default SCStart;
