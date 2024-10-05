import styled, { css } from "styled-components";

interface InputTextWrapperProps {
  $width: string;
}

export const InputTextWrapper = styled.section<InputTextWrapperProps>`
  display: flex;
  flex-direction: column;

  ${({ $width }) => {
    return css`
      width: ${$width};
    `;
  }}
`;

export const InputTextLabelWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  padding: 0rem 0.25rem;
  padding-bottom: 0.5rem;
`;

export const InputTextLabel = styled.label`
  ${({ theme }) => theme.fonts.h3}
  color: ${({ theme }) => theme.colors.font.blue};
`;

export const InputDescriptionLabel = styled.span`
  white-space: pre-line;

  ${({ theme }) => theme.fonts.caption}
  color: ${({ theme }) => theme.colors.font.gray};
`;

export const InputTextFiledWrapper = styled.section`
  display: flex;
  gap: 0.5rem;
`;

interface InputTextFieldProps {
  $disabled: boolean;
}
export const InputTextField = styled.div<InputTextFieldProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  flex-grow: 1;

  border-radius: 0.5rem;
  box-shadow: 0 0 0 1px
    ${({ theme, $disabled }) =>
      $disabled ? theme.colors.border.gray075 : theme.colors.border.blue};

  padding: 0.625rem 1rem;

  input {
    flex-grow: 1;

    ${({ theme }) => theme.fonts.b1}
    color: ${({ theme }) => theme.colors.font.black};

    &::placeholder {
      color: ${({ theme }) => theme.colors.font.gray};
    }
  }

  input:disabled {
    background-color: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.colors.font.grayLight};
    }
  }

  input:focus {
    outline: none;
  }

  img {
    flex-shrink: 0;

    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const InputTextBottomLabelWrapper = styled.section`
  display: flex;
  gap: 0.5rem;
  justify-content: end;

  width: 100%;

  padding: 0rem 0.25rem;
  padding-top: 0.5rem;
`;

export const InputTextCountLabel = styled.div`
  ${({ theme }) => theme.fonts.caption}
  color: ${({ theme }) => theme.colors.font.gray};
`;

export const InputTextErrorLable = styled.label`
  padding: 0rem 0.25rem;
  ${({ theme }) => theme.fonts.caption}
  color: #FD553E;
`;
