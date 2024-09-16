import styled, { css } from "styled-components";

// type
import { SchemeType, ShapeType } from "@components/type/style";
import { onClickButtonAnimation } from "@styles/animation";

interface ChipWrapperProps {
  $isDisabled?: boolean;
  $scheme: SchemeType;
  $shape: ShapeType;
}

export const ChipWrapper = styled.button<ChipWrapperProps>`
  display: flex;
  align-items: center;

  padding: 0.25rem 0.5rem;

  border: none;
  border-radius: 0.25rem;

  ${({ theme }) => theme.fonts.chip};

  // onClick이 있고 비활성 상태가 아닐 때만 hover 스타일 적용
  ${(props) => props.onClick && !props.$isDisabled && onClickButtonAnimation}

  ${({ $scheme, theme }) => {
    return css`
      border-color: ${theme.colors.scheme[$scheme].border};
      background-color: ${theme.colors.scheme[$scheme].background};
      color: ${theme.colors.scheme[$scheme].font};
    `;
  }}

  ${({ $isDisabled, theme }) => {
    if ($isDisabled) {
      return css`
        border-color: ${theme.colors.scheme.disable.border};
        background-color: ${theme.colors.scheme.disable.background};
        color: ${theme.colors.scheme.disable.font};
      `;
    }
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
