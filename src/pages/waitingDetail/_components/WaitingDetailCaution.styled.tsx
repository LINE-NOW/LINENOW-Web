import styled from "styled-components";

export const WaitingDetailCautionWrapper = styled.div`
  padding: 16px;
`;

export const WaitingDetailCautionTitle = styled.div`
  width: 100%;

  padding: 0px 4px 12px 4px;
  margin-bottom: 16px;

  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.border.gray075};

  ${({ theme }) => theme.fonts.h3}
`;

export const WaitingDetailCautionItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const WaitingDetailCautionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const WaitingDetailCautionItemImg = styled.div`
  flex-shrink: 0;

  width: 4.5rem;
  height: 4.5rem;

  border-radius: 0.25rem;

  background-color: ${({ theme }) => theme.colors.background.blueLight};
`;

export const WaitingDetailCautionItemContent = styled.div`
  display: flex;
  flex-grow: 1;

  align-items: center;

  word-break: keep-all;
  white-space: pre-line;

  ${({ theme }) => theme.fonts.b2}
  color: ${({ theme }) => theme.colors.font.blackLight};
`;
