import styled from "styled-components";

export const Title = styled.h3`
  ${({ theme }) => theme.fonts.h3};

  padding: 0px 0.25rem 0.75rem 0.25rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.border.gray075};
`;
