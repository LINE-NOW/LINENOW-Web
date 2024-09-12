import styled, { css } from "styled-components";

interface IconButtonWrapperPorps {
  $iconSize: string;
}

export const IconButtonWrapper = styled.button<IconButtonWrapperPorps>`
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }

  ${({ $iconSize }) => {
    return css`
      width: ${$iconSize};
      height: ${$iconSize};
    `;
  }}

  & img {
    width: 100%;
    height: 100%;
    /* background-color: red; */
  }
`;
