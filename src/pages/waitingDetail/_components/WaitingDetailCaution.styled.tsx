import styled from "styled-components";

export const WaitingDetailCautionWrapper = styled.div`
  padding: 16px;
`;

export const WaitingDetailCautionTitle = styled.h3`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;

  padding: 0rem 0.25rem 0.75rem 0.25rem;
  margin-bottom: 1rem;

  border-bottom: 0.0625rem solid;
  border-color: ${({ theme }) => theme.colors.border.gray075};

  ${({ theme }) => theme.fonts.h3};
`;

export const WaitingDetailCautionSubTitle = styled.div`
  ${({ theme }) => theme.fonts.b3};
  color: ${({ theme }) => theme.colors.font.gray};
  word-break: keep-all;
  white-space: pre-line;

  span {
    display: block;
  }
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

export const WaitingDetailCautionItemImg = styled.img`
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
