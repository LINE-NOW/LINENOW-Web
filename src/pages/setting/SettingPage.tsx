import * as S from './SettingPage.styled';
import SettingItem from './_components/settingItem/SettingItem';
import SettingDeleteID from './_components/deleteID/SettingDeleteID';
import useModal from '@hooks/useModal';

const SettingPage = () => {
  const { openModal } = useModal();

  const logoutModalProps = {
    title: '로그아웃',
    sub: '취소하면 레전드 다시 서야합니다.\n 취소하면 레전드 다시 서야합니다.',
    primaryButton: {
      children: '로그아웃하기',
    },
    secondButton: {
      children: '취소하기',
    },
  };

  const handleLogoutClick = () => {
    openModal(logoutModalProps);
  };

  const settingItemProps = [
    { title: '로그아웃', onClick: handleLogoutClick },
    { title: '언어설정' },
    { title: '이용약관' },
    { title: '1:1 문의' },
    { title: '개발자 정보' },
  ];

  return (
    <S.SettingComponentsWrapper>
      <S.SettingContentWrapper>
        {settingItemProps.map((item, index) => (
          <SettingItem key={index} {...item} />
        ))}
      </S.SettingContentWrapper>
      <SettingDeleteID />
    </S.SettingComponentsWrapper>
  );
};
export default SettingPage;
