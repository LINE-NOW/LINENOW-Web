import styled from "styled-components";
import IconLabel from "@components/label/IconLabel";
import { mainFoldTransitionAnimation } from "@styles/animation";

export const MainNavigationWrapper = styled.section`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  width: 100%;

  padding: 1rem 1.25rem 0 1.25rem;
  box-sizing: border-box;

  ${mainFoldTransitionAnimation};
`;

export const MainNavigationTitleWrapper = styled.div`
  padding: 0rem 0.25rem;
  display: flex;
  justify-content: space-between;
`;

export const MainNavigationTitleLabelButton = styled(IconLabel)``;

export const MainNavigationTitleLabel = styled.h3`
  display: flex;
  gap: 0.25rem;

  color: ${({ theme }) => theme.colors.font.white};
  &.fold {
    ${({ theme }) => theme.fonts.h2};
  }
  &.unfold {
    ${({ theme }) => theme.fonts.h3};
  }

  .lime {
    color: ${({ theme }) => theme.colors.font.lime};
  }
`;
