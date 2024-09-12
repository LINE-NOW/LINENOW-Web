import * as S from "./CustomButton.styled";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon: string;
  iconSize: string;
  touchSize?: string;
}

export const IconButton = ({
  onClick,
  icon,
  iconSize,
  touchSize = iconSize,
}: IconButtonProps) => {
  return (
    <S.IconButtonWrapper onClick={onClick} $iconSize={iconSize}>
      <img src={`/icons/icon_${icon}.svg`} />
    </S.IconButtonWrapper>
  );
};
