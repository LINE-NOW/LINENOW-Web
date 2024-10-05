import * as S from "./InputText.styled";
import Button, { ButtonProps } from "@components/button/Button";

interface InputTextButtonProps extends Omit<ButtonProps, "size" | "shape"> {}

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  label?: string;
  description?: string;
  currentCount?: number;
  count?: number;
  button?: InputTextButtonProps;
  errorMessage?: string;
}

const InputText = ({
  width = "100%",
  label,
  description,
  currentCount,
  count,
  button,
  errorMessage,
  type = "text",
  ...props
}: InputTextProps) => {
  return (
    <S.InputTextWrapper $width={width}>
      {(label || description) && (
        <S.InputTextLabelWrapper>
          {label && <S.InputTextLabel>{label}</S.InputTextLabel>}
          {description && (
            <S.InputDescriptionLabel>{description}</S.InputDescriptionLabel>
          )}
        </S.InputTextLabelWrapper>
      )}

      <S.InputTextFiledWrapper>
        <S.InputTextField $disabled={props.disabled || false}>
          <input
            disabled={props.disabled}
            type={type}
            placeholder={props.placeholder}
            {...props}
          />
        </S.InputTextField>
        {button && (
          <Button style={{ width: "auto" }} size="medium" {...button} />
        )}
      </S.InputTextFiledWrapper>

      {errorMessage ||
        (count && (
          <S.InputTextBottomLabelWrapper>
            {errorMessage && (
              <S.InputTextErrorLable>{errorMessage}</S.InputTextErrorLable>
            )}
            {count && (
              <S.InputTextCountLabel>
                {currentCount}/{count}
              </S.InputTextCountLabel>
            )}
          </S.InputTextBottomLabelWrapper>
        ))}
    </S.InputTextWrapper>
  );
};

export default InputText;
