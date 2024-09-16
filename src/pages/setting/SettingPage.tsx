import * as S from './SettingPage.styled';
import SettingItem from './_components/settingItem/SettingItem';
import SettingDeleteID from './_components/deleteID/SettingDeleteID';

const SettingPage = () => {
  return (
    <S.SettingComponentsWrapper>
      <S.SettingContentWrapper>
        <SettingItem title="로그아웃" />
        <SettingItem title="언어설정" />
        <SettingItem title="이용약관" />
        <SettingItem title="1:1 문의" />
        <SettingItem title="개발자 정보" />
      </S.SettingContentWrapper>
      <SettingDeleteID />
    </S.SettingComponentsWrapper>
  );
};
export default SettingPage;
