import { ReactNode } from "react";
import { ButtonWrapper } from "@components/button/Button.styled";

// type
import { SchemeType, ShapeType } from "@types/style";

// 버튼의 크기 type
export type ButtonSizeType = "large" | { width: string; height: string };

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSizeType;
  scheme?: SchemeType;
  shape?: ShapeType;
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
