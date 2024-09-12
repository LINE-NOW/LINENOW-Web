import styled from "styled-components";
import IconLabel from "@components/label/IconLabel";
export const MainNavigationWrapper = styled.section`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  background-color: ${({ theme }) => theme.colors.background.black};
  padding: 1rem 1.25rem 1.5rem 1.25rem;
`;

export const MainNavigationTitleWrapper = styled.div`
  padding: 0rem 0.25rem;
  display: flex;
  justify-content: space-between;
`;

export const MainNavigationTitleLabelButton = styled(IconLabel)``;

export const MainNavigationTitleLabel = styled.h3`
  ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.font.white};

  display: flex;
  gap: 0.25rem;

  .lime {
    color: ${({ theme }) => theme.colors.font.lime};
  }
`;
