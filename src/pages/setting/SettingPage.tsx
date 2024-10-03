import * as S from './SettingPage.styled';
import SettingItem from './_components/settingItem/SettingItem';
import SettingDeleteID from './_components/deleteID/SettingDeleteID';
import useModal from '@hooks/useModal';

// 로그인 바텀 시트 테스트
import useBottomsheet from '@hooks/useBottomsheet';
import LoginBottomsheetContent from '@components/login/LoginBottomsheetContent';
import { postLogout } from '@apis/domains/auth/logout/apis';
import { useNavigate } from 'react-router-dom';

const SettingPage = () => {
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  // 로그아웃 > 모달창 - 로그아웃하기 클릭
  const handleLogout = async () => {
    // TODO: - accessToken 관련 추후에 확인
    // const accessToken = localStorage.getItem('accessToken');
    const accessToken = '12345';

    if (accessToken) {
      const response = await postLogout();

      if (response) {
        localStorage.removeItem('accessToken');
        closeModal();
        navigate('/');
      } else {
        // console.log('Logout failed');
      }
    } else {
      // console.log('No accessToken found');
    }
  };

  const logoutModalProps = {
    title: '로그아웃',
    sub: '취소하면 레전드 다시 서야합니다.\n 취소하면 레전드 다시 서야합니다.',
    primaryButton: {
      children: '로그아웃하기',
      onClick: handleLogout,
    },
    secondButton: {
      children: '취소하기',
    },
  };

  const handleLogoutClick = () => {
    openModal(logoutModalProps);
  };

  // 이용약관 클릭
  const handleTermsOfServiceClick = () => {
    window.open(
      'https://thorn-freesia-96f.notion.site/c645fe5ebb624ca9a7be3e697ecdf8be?pvs=4',
      '_blank'
    );
  };

  // 1:1 문의 클릭
  const handleInquiryClick = () => {
    window.open('https://open.kakao.com/o/sDiY4qSg', '_blank');
  };

  // 개발자 정보 클릭
  const handleDeveloperInfoClick = () => {
    window.open(
      'https://thorn-freesia-96f.notion.site/09b2230a514848ec9041518f467f86e4?pvs=4',
      '_blank'
    );
  };

  // 로그인 바텀 시트 테스트
  const { openBottomsheet } = useBottomsheet();

  const handleOpenBottomSheetButton = () => {
    openBottomsheet({ children: <LoginBottomsheetContent /> });
  };

  const settingItemProps = [
    { title: '로그아웃', onClick: handleLogoutClick },
    { title: '언어설정', onClick: handleOpenBottomSheetButton },
    { title: '이용약관', onClick: handleTermsOfServiceClick },
    { title: '1:1 문의', onClick: handleInquiryClick },
    { title: '개발자 정보', onClick: handleDeveloperInfoClick },
  ];

  return (
    <S.SettingPageWrapper>
      <S.SettingComponentsWrapper>
        <S.SettingContentWrapper>
          {settingItemProps.map((item, index) => (
            <SettingItem key={index} {...item} />
          ))}
        </S.SettingContentWrapper>
        <SettingDeleteID />
      </S.SettingComponentsWrapper>

      <S.SettingFooterWrapper>
        <img src="/images/image_vertical_logo.svg" />
        <div>대표 : 이경 | 관리자 : 오찬주</div>
        <div>법인명 : 동국대학교 산학협력단 | 사업자 등록번호 201-82-04468</div>
        <br />
        <div>이메일 : linenow2024@gmail.com</div>
        <div>
          주소 : 서울특별시 중구 필동로1길 30, 2층 본관 2층(필동3가, 동국대학교)
        </div>
        <br />

        <div>Copyright 2024. linenow. All rights reserved.</div>
      </S.SettingFooterWrapper>
    </S.SettingPageWrapper>
  );
};
export default SettingPage;
