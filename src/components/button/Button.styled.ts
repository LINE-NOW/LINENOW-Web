import React from "react";
import styled, { css } from "styled-components";

// type
import { ButtonSizeType } from "./Button";
import { SchemeType, ShapeType } from "@linenow-types/style";
import { onClickButtonAnimation } from "@styles/animation";

interface ButtonWrapperProps {
  $isDisabled?: boolean;
  $size: ButtonSizeType;
  $width: string;
  $scheme: SchemeType;
  $shape: ShapeType;
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: flex;
  align-items: center;
  // 자식노드가 1개면 중앙 정렬, 2개 이상이면 양끝 정렬

  ${(props) => css`
    ${props.children && React.Children.count(props.children) === 1
      ? `
      justify-content: center;
    `
      : `
      justify-content: space-between;
    `}
  `}

  // onClick이 있고 비활성 상태가 아닐 때만 hover 스타일 적용
  ${(props) => props.onClick && !props.$isDisabled && onClickButtonAnimation}

  ${({ $width }) => {
    return css`
      width: ${$width};
    `;
  }}


  ${({ $size, theme }) => {
    switch ($size) {
      case "large":
        return css`
          ${theme.fonts.btn}
          height: 3.5rem;
          padding: 0 1.25rem;
          border-radius: 0.5rem;

          img {
            width: 1.5rem;
            height: 1.5rem;
          }
        `;
      case "medium":
        return css`
          ${theme.fonts.btn2}
          height: 2.75rem;
          padding: 0 0.75rem;
          border-radius: 0.5rem;

          img {
            width: 1.25rem;
            height: 1.25rem;
          }
        `;
    }
  }}

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
  
  // 버튼의 스타일이 fill 일때 - border noen 적용
  // 버튼의 스타일이 outline일때 - border 1px 적용, 배경은 투명화 진행
  ${({ $shape }) => {
    if ($shape == "fill") {
      return css`
        border: none;
      `;
    } else if ($shape == "outline") {
      return css`
        border: 1px solid;
        background-color: transparent;
      `;
    }
  }}
`;
