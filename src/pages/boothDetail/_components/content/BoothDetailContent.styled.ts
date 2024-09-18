import styled from "styled-components";

export const BoothDetailContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1.25rem 1rem;
`;

export const BoothDetailContentTitle = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
`;

export const BoothDetailContentSummary = styled.article`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.25px;
`;

export const BoothDetailContentLocationWrapper = styled.section`
  display: flex;
  gap: 2px;
`;
export const BoothDetailContentLocationIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const BoothDetailContentLocationInfo = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.font.gray};
`;
