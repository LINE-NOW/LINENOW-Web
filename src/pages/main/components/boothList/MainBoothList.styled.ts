import styled from "styled-components";

export const MainBoothListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-grow: 1;

  overflow-y: hidden;

  padding: 1rem;
  padding-bottom: 0rem;

  background-color: ${({ theme }) => theme.colors.background.white};
  border-radius: 0.625rem 0.625rem 0rem 0rem;
`;

// 상단 타이틀
export const MainBoothListTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 1.5rem 0rem 1rem 0rem;

  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.border.gray075};
`;

export const MainBoothListTitleLabel = styled.h2`
  ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.font.black};
`;

export const MainBoothListTitleOptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.fonts.b3};
  color: ${({ theme }) => theme.colors.font.gray};
`;

// 부스 리스트
export const MainBoothListScrollContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  // TODO: overflow-x 적용 안됨 absolute 등 다른 방법 찾기
  overflow-x: visible;
  overflow-y: auto;

  border: 1px solid brown;
`;
