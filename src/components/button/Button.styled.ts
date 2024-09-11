import React from "react";
import styled, { css } from "styled-components";
import {
  ButtonSizeType,
  ButtonSchemeType,
  ButtonShapeType,
} from "@components/button/Button";

interface DefaultButtonProps {
  $isDisabled?: boolean;
  $size: ButtonSizeType;
  $scheme: ButtonSchemeType;
  $shape: ButtonShapeType;
}
export const DefaultButton = styled.button<DefaultButtonProps>`
  ${({ theme }) => theme.fonts.btn};

  border: none;

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
  ${(props) =>
    props.onClick &&
    !props.$isDisabled &&
    css`
      cursor: "pointer";
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.05);
      }
    `}

  ${({ $size, theme }) => {
    switch ($size) {
      case "large":
        return css`
          ${theme.fonts.btn}
          width: 100%;
          height: 3.5rem;
          padding: 0 1.25rem;
          border-radius: 0.5rem;
        `;
      default:
        return css`
          ${theme.fonts.btn}
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
