import { deleteUser } from '@apis/domains/auth/deleteID/apis';
import * as S from './SettingDeleteID.styled';
import useModal from '@hooks/useModal';
import { useNavigate } from 'react-router-dom';

const SettingDeleteID = () => {
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const handleDeleteIDClick = () => {
    openModal({
      title: '회원탈퇴',
      sub: '취소하면 레전드 다시 서야합니다.\n 취소하면 레전드 다시 서야합니다.',
      primaryButton: {
        children: '회원탈퇴하기',
        onClick: handleDeleteID,
      },
      secondButton: {
        children: '취소하기',
      },
    });
  };

  const handleDeleteID = async () => {
    const response = await deleteUser();
    if (response && response.status) {
      console.log(response);
      // localStorage.clear(); // TODO: - 추후에 확인
      closeModal();
      navigate('/');
    }
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
