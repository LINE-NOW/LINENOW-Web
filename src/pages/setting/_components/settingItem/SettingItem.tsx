import * as S from './SettingItem.styled';

export interface SettingItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
}

const SettingItem = ({ onClick, title }: SettingItemProps) => {
  return (
    <S.SettingItemComponentWrapper>
      <S.SettingItemComponentText>{title}</S.SettingItemComponentText>
    </S.SettingItemComponentWrapper>
  );
};
export default SettingItem;
