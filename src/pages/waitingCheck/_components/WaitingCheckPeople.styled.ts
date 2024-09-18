import styled, { css } from "styled-components";

export const WaitingCheckContainer = styled.div`
  display: flex;
  overflow-x: auto;

  margin-bottom: 1.75rem;

  //스크롤비 안보이도록
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Circle = styled.div<{ $isChecked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.25rem;
  height: 3.25rem;

  padding: 0.625rem;
  margin-right: 1rem;

  border-radius: 2.5rem;

  ${({ $isChecked, theme }) => css`
    border: 1px solid ${theme.colors.scheme.blue.border};
    background-color: ${$isChecked ? theme.colors.scheme.blue.background : ""};
    color: ${$isChecked
      ? theme.colors.scheme.blue.font
      : theme.colors.font.blue};
  `}

  cursor: pointer;
  flex-shrink: 0;

  &:last-child {
    margin-right: 0;
  }
`;
