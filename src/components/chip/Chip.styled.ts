import styled, { css } from "styled-components";

// type
import { SchemeType, ShapeType } from "@linenow-types/style";

interface ChipWrapperProps {
  $scheme: SchemeType;
  $shape: ShapeType;
}

export const ChipWrapper = styled.div<ChipWrapperProps>`
  display: flex;
  align-items: center;

  padding: 0.25rem 0.5rem;

  border: none;
  border-radius: 0.25rem;

  ${({ theme }) => theme.fonts.chip};

  ${({ $scheme, theme }) => {
    return css`
      border-color: ${theme.colors.scheme[$scheme].border};
      background-color: ${theme.colors.scheme[$scheme].background};
      color: ${theme.colors.scheme[$scheme].font};
    `;
  }}

  // 버튼의 스타일이 outline일때
  ${({ $shape }) => {
    if ($shape == "outline") {
      return css`
        border: 1px solid;
        background-color: transparent;
      `;
    }
  }}
`;
