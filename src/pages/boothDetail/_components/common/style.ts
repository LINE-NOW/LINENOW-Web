import styled from "styled-components";

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  padding: 0px 4px 12px 4px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.gray075};
`;
