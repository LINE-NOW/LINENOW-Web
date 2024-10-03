import styled from "styled-components";

export const EntranceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  align-self: stretch;
`;

export const EntranceContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const EntranceTextWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;

  padding: 0px 0.25rem;
`;

export const EntranceTitle = styled.h1`
  color: ${({ theme }) => theme.colors.font.black};

  ${({ theme }) => theme.fonts.h1}
`;

export const EntranceDescription = styled.article`
  color: ${({ theme }) => theme.colors.font.blackLight};

  ${({ theme }) => theme.fonts.b1}
`;

export const EntranceBoothCardWrapper = styled.section`
  border: 0.0625rem solid ${({ theme }) => theme.colors.background.grayLight};
  border-radius: 0.5rem;
`;
