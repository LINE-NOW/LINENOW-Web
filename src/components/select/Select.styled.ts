import styled from "styled-components";

export const SelectWrapper = styled.select`
  -webkit-appearance: none; /* 크롬 화살표 없애기 */
  -moz-appearance: none; /* 파이어폭스 화살표 없애기 */
  appearance: none; /* 화살표 없애기 */
  border: 0;

  text-align: right;

  ${({ theme }) => theme.fonts.b3};
  color: ${({ theme }) => theme.colors.font.gray};

  &:focus {
    outline: none;
  }
`;
