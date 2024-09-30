// 1. display(표시)
// 2. overflow(넘침)
// 3. float(흐름)
// 4. position(위치)
// 5. width/height(크기)
// 6. padding/margin(간격)
// 7. border(테두리)
// 8. background(배경)
// 9. color/font(글꼴)
// 10. animation

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.background.grayLight};
  border-radius: 0.5rem;
`;

export const EntranceBoothDetailWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

export const EntranceBoothCardImg = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 0.25rem;
`;

export const EntranceBoothCardTextWrapper = styled.article`
  display: flex;
  padding: 0.25rem 0rem;
  flex-direction: column;
  justify-content: center;
  gap: 0.375rem;
  flex: 1 0 0;
`;

export const EntrnaceBoothCardTitleWrapper = styled.article`
  display: flex;
  gap: 0.25rem;
  align-self: stretch;
`;

export const EntranceBoothCardTitleText = styled.h3<{ $isGray?: boolean }>`
  ${({ theme }) => theme.fonts.h3};
  color: ${({ theme, $isGray }) =>
    $isGray ? theme.colors.font.gray : theme.colors.font.black || "black"};
`;

export const EntranceBoothSubText = styled.div`
  ${({ theme }) => theme.fonts.b2}
  color:${({ theme }) => theme.colors.font.blackLight};
`;

export const EntranceLocationLabel = styled.div`
  ${({ theme }) => theme.fonts.b3}
  color:${({ theme }) => theme.colors.font.gray};
`;
