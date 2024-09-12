import { ReactNode } from "react";
import { ButtonWrapper } from "@components/button/Button.styled";

// 버튼의 크기 type
export type ButtonSizeType = "large" | { width: string; height: string };

// 버튼의 색상 패턴 type
export type ButtonSchemeType =
  | "blue"
  | "lime"
  | "blueLight"
  | "limeLight"
  | "grayLight";

// 버튼의 형태 type
export type ButtonShapeType = "fill" | "outline";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSizeType;
  scheme?: ButtonSchemeType;
  shape?: ButtonShapeType;
  children?: ReactNode;
}

const Button = ({
  disabled,
  onClick,
  size = "large",
  scheme = "blue",
  shape = "fill",
  children,
  ...props
}: ButtonProps) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      disabled={disabled}
      $isDisabled={disabled}
      $size={size}
      $scheme={scheme}
      $shape={shape}
      {...props}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
