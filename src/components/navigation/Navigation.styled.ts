import styled from "styled-components";

export const NavigationWrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 1rem 1.5rem;
`;

export const NavigationLabel = styled.h2`
  ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.font.black};
`;
