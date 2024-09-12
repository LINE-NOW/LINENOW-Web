import { ReactNode } from "react";

// type
import { SchemeType, ShapeType } from "@components/type/style";

//component
import { ChipWrapper } from "./Chip.styled";

export interface ChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  scheme?: SchemeType;
  shape?: ShapeType;
  children?: ReactNode;
}

const Chip = ({
  disabled,
  onClick,
  scheme = "blue",
  shape = "fill",
  children,
  ...props
}: ChipProps) => {
  return (
    <ChipWrapper
      onClick={onClick}
      disabled={disabled}
      $isDisabled={disabled}
      $scheme={scheme}
      $shape={shape}
      {...props}
    >
      {children}
    </ChipWrapper>
  );
};

export default Chip;
