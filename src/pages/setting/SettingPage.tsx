import * as S from './SettingPage.styled';
import SettingItem from './_components/settingItem/SettingItem';
import SettingDeleteID from './_components/deleteID/SettingDeleteID';
import useModal from '@hooks/useModal';
import { postLogout } from '@apis/domains/auth/logout/apis';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { languageAtom } from '@atoms/language';
import axios from 'axios';

const SettingPage = () => {
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: false,
  });
  const [language, setLanguage] = useAtom(languageAtom);

  // 로그아웃 > 모달창 - 로그아웃하기 클릭
  const handleLogout = async () => {
    // TODO: - accessToken 관련 추후에 확인
    // const accessToken = localStorage.getItem('accessToken');
    // const accessToken = "12345";

    // if (accessToken) {
    //   const response = await postLogout();

    //   if (response) {
    //     localStorage.removeItem("accessToken");
    //     closeModal();
    //     navigate("/");
    //   } else {
    //     // console.log('Logout failed');
    //   }
    // } else {
    //   // console.log('No accessToken found');
    // }

    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    try {
      const response = await instance.post(
        '/api/v1/dj-rest-auth/logout/',
        { refresh: refreshToken },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.data) {
        localStorage.clear();
        closeModal();
        alert('로그아웃 성공');
        navigate('/');
      } else {
        alert('로그아웃 실패');
      }
    } catch (error) {
      console.log('error:', error);
      alert('로그아웃 중 오류가 발생했습니다.');
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

  // 로그아웃 클릭
  const handleLogoutClick = () => {
    openModal(logoutModalProps);
  };

  // 언어설정 클릭
  const handleLanguageClick = () => {
    setLanguage(prevLanguage => (prevLanguage === 'ko' ? 'en' : 'ko'));
    console.log(language);
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

  const settingItemProps = [
    { title: '로그아웃', onClick: handleLogoutClick },
    { title: '언어설정', onClick: handleLanguageClick },
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
    </S.SettingPageWrapper>
  );
};
export default SettingPage;
