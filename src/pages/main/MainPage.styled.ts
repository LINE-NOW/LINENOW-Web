import { mainFoldTransitionAnimation } from "@styles/animation";
import styled from "styled-components";

export const MainFixedComponentsWrapper = styled.section`
  position: fixed;
  z-index: 10;

  display: flex;
  flex-direction: column;

  overflow-y: hidden;

  width: 100%;
  max-width: 540px;

  background-color: ${({ theme }) => theme.colors.background.black};
`;

export const MainFixedComponentBackgorund = styled.div`
  width: 100%;

  ${mainFoldTransitionAnimation};
`;
