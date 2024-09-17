import styled from "styled-components";

export const WaitingDetailPageBoothCardWrapper = styled.div`
  width: 100%;

  padding: 16px 20px 20px 20px;
`;

export const WaitingDetailPageBoothCard = styled.div`
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.border.gray100};
  border-radius: 8px;
`;

// export const WaitingDetailPageContent = styled.div<{ $paddingBottom: number }>`
//   padding-bottom: ${({ $paddingBottom }) =>
//     `calc(${$paddingBottom}px + 0.625rem)`};
// `;
