import styled, { css } from "styled-components";

interface IconLabelWrapperProps {
  $gap: string;
  $iconSize: string;
}
export const IconLabelWrapper = styled.span<IconLabelWrapperProps>`
  display: flex;
  align-items: center;
  ${({ $gap, $iconSize }) => {
    return css`
      gap: ${$gap};

      & img {
        width: ${$iconSize};
        height: ${$iconSize};
      }
    `;
  }}
`;
