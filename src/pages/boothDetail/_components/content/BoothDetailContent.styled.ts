import styled from "styled-components";

export const BoothDetailContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 1.25rem 1rem;
`;

export const BoothDetailContentTitle = styled.h1`
  ${({ theme }) => theme.fonts.h1};
`;

export const BoothDetailContentSummary = styled.article`
  ${({ theme }) => theme.fonts.b1};
`;

export const BoothDetailContentLocationWrapper = styled.section`
  display: flex;

  gap: 0.125rem;
`;
export const BoothDetailContentLocationIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const BoothDetailContentLocationInfo = styled.div`
  ${({ theme }) => theme.fonts.b3}
  color:${({ theme }) => theme.colors.font.gray};
`;
