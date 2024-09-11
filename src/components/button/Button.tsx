import { ReactNode } from "react";
import { DefaultButton } from "@components/button/Button.styled";

export type ButtonSizeType = "large" | { width: string; height: string };

export type ButtonSchemeType =
  | "blue"
  | "lime"
  | "blueLight"
  | "limeLight"
  | "grayLight";

export type ButtonVarientType = "fill" | "outline";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSizeType;
  scheme?: ButtonSchemeType;
  varient?: ButtonVarientType;
  children: ReactNode;
}

const Button = ({
  disabled,
  onClick,
  size = "large",
  scheme = "blue",
  varient = "fill",
  children,
  ...props
}: ButtonProps) => {
  return (
    <DefaultButton
      onClick={onClick}
      disabled={disabled}
      $isDisabled={disabled}
      $size={size}
      $scheme={scheme}
      $varient={varient}
      {...props}
    >
      {children}
    </DefaultButton>
  );
};

export default Button;
