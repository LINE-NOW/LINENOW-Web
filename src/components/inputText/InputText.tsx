import { ButtonProps } from "@components/button/Button";
import * as S from "./InputText.styled";

interface InputTextButtonProps extends Omit<ButtonProps, "size" | "shape"> {}

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  label?: string;
  sub?: string;
  count?: number;
  button?: InputTextButtonProps;
  errorMessage?: string;
}

const InputText = ({
  width = "100%",
  label,
  sub,
  count,
  button,
  errorMessage,
  type = "text",
  ...props
}: InputTextProps) => {
  return (
    <S.InputTextWrapper $width={width}>
      {label && <S.InputTextLable>{label}</S.InputTextLable>}

      <S.InputTextField>
        <input type={type} placeholder={props.placeholder} {...props} />
      </S.InputTextField>
      {errorMessage && (
        <S.InputTextErrorLable>{errorMessage}</S.InputTextErrorLable>
      )}
    </S.InputTextWrapper>
  );
};

export default InputText;
