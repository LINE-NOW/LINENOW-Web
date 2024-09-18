import styled from "styled-components";

export const BottomButtonWrapper = styled.section`
  display: flex;
  gap: 0.75rem;

  position: fixed;
  transform: translate(-50%, 0%);
  bottom: 0;
  left: 50%;

  width: 100%;
  max-width: 540px;

  padding: 1rem;
  padding-bottom: 0.5rem;
  border-radius: 12px 12px 0px 0px;

  background-color: ${({ theme }) => theme.colors.background.white};
  box-shadow: 0px 0px 4px 4px rgba(26, 30, 39, 0.1);

  flex-direction: column;
`;

export const BottomButtonInformationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;

  height: 1.25rem;
  padding: 0 0.25rem;
  ${({ theme }) => theme.fonts.chip}
  color: ${({ theme }) => theme.colors.font.black};

  .blue {
    ${({ theme }) => theme.fonts.b2_b}
    color: ${({ theme }) => theme.colors.font.blue};
  }
`;

export const BottomButtonWaitingCancle = styled.div`
  display: flex;
  justify-content: center;

  padding: 0.25rem 0px;

  color: ${({ theme }) => theme.colors.font.gray};

  span {
    padding-bottom: 0.125rem;

    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.border.gray100};

    cursor: pointer;
  }
`;

export const BottomButtonPadding = styled.div<{ $height: number }>`
  /* height: ${({ $height }) => ($height + 10) / 16}rem; */
  flex-shrink: 0;
`;
