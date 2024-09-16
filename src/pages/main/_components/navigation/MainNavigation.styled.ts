import styled from "styled-components";
import IconLabel from "@components/label/IconLabel";

// style
import { changeFoldStateAnimation } from "@styles/animation";

export const MainNavigationWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 1rem;

  width: 100%;

  box-sizing: border-box;
  padding: 1rem 1.25rem 0 1.25rem;

  ${changeFoldStateAnimation};
`;

export const MainNavigationTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0rem 0.25rem;
`;

export const MainNavigationTitleLabelButton = styled(IconLabel)``;

export const MainNavigationTitleLabel = styled.h3`
  display: flex;
  gap: 0.25rem;

  &.fold {
    ${({ theme }) => theme.fonts.h2};
  }
  &.unfold {
    ${({ theme }) => theme.fonts.h3};
  }

  color: ${({ theme }) => theme.colors.font.white};

  .lime {
    color: ${({ theme }) => theme.colors.font.lime};
  }
`;
