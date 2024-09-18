import * as S from './SettingDeleteID.styled';
import useModal from '@hooks/useModal';

const SettingDeleteID = () => {
  const { openModal } = useModal();

  const handleDeleteIDClick = () => {
    openModal({
      title: '회원탈퇴',
      sub: '취소하면 레전드 다시 서야합니다.\n 취소하면 레전드 다시 서야합니다.',
      primaryButton: {
        children: '회원탈퇴하기',
      },
      secondButton: {
        children: '취소하기',
      },
    });
  };

  return (
    <S.SettingDeleteIDComponentWrapper>
      <S.SettingDeleteIDComponentText onClick={handleDeleteIDClick}>
        회원 탈퇴
      </S.SettingDeleteIDComponentText>
    </S.SettingDeleteIDComponentWrapper>
  );
};
export default SettingDeleteID;
