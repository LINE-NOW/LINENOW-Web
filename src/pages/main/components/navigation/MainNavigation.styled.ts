import styled from "styled-components";

export const MainNavigationWrapper = styled.section`
  flex-shrink: 0;

  background-color: ${({ theme }) => theme.colors.background.black};
  color: ${({ theme }) => theme.colors.font.white};

  padding: 1rem 1.25rem 1.5rem 1.25rem;
`;
