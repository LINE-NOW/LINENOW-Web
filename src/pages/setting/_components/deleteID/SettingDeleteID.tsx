import { deleteUser } from '@apis/domains/auth/deleteID/apis';
import * as S from './SettingDeleteID.styled';
import useModal from '@hooks/useModal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SettingDeleteID = () => {
  const { openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: false,
  });

  // instance.interceptors.request.use(
  //   config => {
  //     const token = localStorage.getItem('accessToken');
  //     console.log('확인용, ', token);

  //     if (token) {
  //       config.headers.Authorization = `Bearer ${token}`;
  //     }
  //     return config;
  //   },
  //   error => {
  //     return Promise.reject(error);
  //   }
  // );

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
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    try {
      const response = await instance.post(
        '/api/v1/accounts/withdraw/',
        { refresh_token: refreshToken },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.data) {
        localStorage.clear();
        closeModal();
        alert('회원탈퇴 성공');
        navigate('/');
      } else {
        alert('회원탈퇴 실패');
      }
    } catch (error) {
      console.log('error:', error);
      alert('회원탈퇴 중 오류가 발생했습니다.');
    }
    // const response = await deleteUser();
    // console.log('response, ', response);

    // if (response && response.status) {
    //   // localStorage.clear(); // TODO: - 추후에 확인
    //   closeModal();
    //   navigate('/');
    // }
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
