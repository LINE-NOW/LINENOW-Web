import { MAIN_NAVIGATION_HEIGHT } from "@constants/style";
import styled from "styled-components";

// 상단 타이틀
export const MainBoothListHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2.5rem 1rem 1rem 1rem;

  border-radius: 0.625rem 0.625rem 0rem 0rem;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.border.gray075};

  background-color: ${({ theme }) => theme.colors.background.white};
`;

export const MainBoothListHeaderTitleLabel = styled.h2`
  ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.font.black};
`;

export const MainBoothListHeaderOptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.fonts.b3};
  color: ${({ theme }) => theme.colors.font.gray};
`;

// 부스 리스트
export const MainBoothListScrollContainer = styled.section`
  display: flex;
  flex-direction: column;

  min-height: calc(100vh - ${MAIN_NAVIGATION_HEIGHT.fold} + 2px);

  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.background.white};
`;
