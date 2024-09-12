import styled from "styled-components";

export const WaitingCardWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background.white};
  padding: 1.25rem 1rem;

  border-radius: 0.75rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.border.gray100};
`;

// WaitingCardTitle
export const WaitingCardTitleWrapper = styled.div`
  padding: 0 0.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.border.gray100};
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: space-between;
`;

export const WaitingCardTitleLabel = styled.h2`
  ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.font.black};
`;

// BoothInformation
export const BoothInformationWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const BoothInformationImage = styled.img`
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 0.25rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.background.blueLight};
`;

export const BoothInformaitonLabelWrapper = styled.div`
  padding: 0.25rem 0rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const BoothInformationNameLabel = styled.h3`
  ${({ theme }) => theme.fonts.h3};
  color: ${({ theme }) => theme.colors.font.black};

  display: flex;
  gap: 0.25rem;

  :nth-of-type(2) {
    color: ${({ theme }) => theme.colors.font.gray};
  }
`;

export const BoothInformationPositionLabel = styled.p`
  ${({ theme }) => theme.fonts.b3};
  color: ${({ theme }) => theme.colors.font.gray};
`;

// WaitingCardButton
export const WaitingCardButtonWrapper = styled.div`
  padding-top: 1rem;
`;
