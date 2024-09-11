import styled from "styled-components";

export const BottomsheetBackground = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 20;
  width: 100%;
  max-width: 540px;
  height: 100%;
  background-color: rgb(15 15 15 / 70%);

  display: flex;
  align-items: end;
  justify-content: center;
`;

export const BottomsheetContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.background.white};
  padding: 2rem 1rem 0.5rem 1rem;
  border-radius: 0.75rem 0.75rem 0rem 0rem;

  width: 100%;
`;
