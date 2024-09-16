import IconLabel, { IconLabelProps } from "@components/label/IconLabel";
import * as S from "./CustomButton.styled";
import { Link } from "react-router-dom";
import Chip, { ChipProps } from "@components/chip/Chip";

interface CommonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface LinkButtonProps {
  to: string;
}

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  iconSize: string;
  touchSize?: string;
}

type IconLinkButtonProps = IconButtonProps & LinkButtonProps;
export const IconLinkButton = ({
  to,
  icon,
  iconSize,
  touchSize = iconSize,
}: IconLinkButtonProps) => {
  return (
    <Link to={to}>
      <S.IconButtonWrapper $iconSize={iconSize}>
        <img src={`/icons/icon_${icon}.svg`} />
      </S.IconButtonWrapper>
    </Link>
  );
};

type IconLableLinkButtonProps = IconLabelProps & LinkButtonProps;
export const IconLabelLinkButton = ({
  to,
  ...props
}: IconLableLinkButtonProps) => {
  return (
    <Link to={to}>
      <IconLabel {...props} />
    </Link>
  );
};

type ChipButtonProps = ChipProps & CommonButtonProps;
export const ChipButton = ({
  disabled,
  onClick,
  ...props
}: ChipButtonProps) => {
  return (
    <button onClick={onClick} {...props}>
      <Chip scheme={disabled ? "grayLight" : props.scheme} {...props} />
    </button>
  );
};
