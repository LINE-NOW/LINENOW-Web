import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  width: 100%;
`;

// TODO: - UI 나오는대로 변경
export const SppinerContent = styled.div`
  /* display: inline-block; */

  width: 48px;
  height: 48px;

  border: 5px solid;
  border-color: #fff;
  border-bottom-color: blue;
  border-radius: 50%;

  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
