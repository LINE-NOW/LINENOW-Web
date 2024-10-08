import styled, { css } from "styled-components";
import * as A from "@styles/animation";

interface IconButtonWrapperPorps {
  $iconSize: string;
}

export const IconButtonWrapper = styled.div<IconButtonWrapperPorps>`
  ${A.onClickButtonAnimation}

  ${({ $iconSize }) => {
    return css`
      width: ${$iconSize};
      height: ${$iconSize};
    `;
  }}

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const CustomButtonWrapper = styled.button`
  ${A.onClickButtonAnimation}
`;
