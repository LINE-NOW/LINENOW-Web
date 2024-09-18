import styled from "styled-components";

export const BoothDetailCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  width: 100%;
  max-width: 540px;
`;

export const BoothDetailCardThumbnail = styled.img`
  width: 100%;
`;

export const BoothDetailCardIndicatorWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 100%;
`;

export const BoothDetailCardIndicator = styled.div<{ $active: boolean }>`
  width: 4px;
  height: 4px;

  border-radius: 50%;

  background-color: ${({ $active, theme }) =>
    $active
      ? theme.colors.scheme.blue.background
      : theme.colors.background.grayLight};

  transition: background-color 0.3s ease;
`;
