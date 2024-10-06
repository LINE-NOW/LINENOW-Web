import styled from "styled-components";

export const NavigationWrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  position: fixed;
  transform: translate(-50%, 0%);
  top: 0;
  left: 50%;
  z-index: 30;

  width: 100%;
  max-width: 540px;

  padding: 1rem 1.5rem;

  background-color: ${({ theme }) => theme.colors.background.white};
`;

export const NavigationLabel = styled.h2`
  ${({ theme }) => theme.fonts.h2};
  color: ${({ theme }) => theme.colors.font.black};
`;
