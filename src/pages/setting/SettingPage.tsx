import * as S from "./SettingPage.styled";
import SettingItem from "./_components/settingItem/SettingItem";
import SettingDeleteID from "./_components/deleteID/SettingDeleteID";
import useModal from "@hooks/useModal";

// 로그인 바텀 시트 테스트
import useBottomsheet from "@hooks/useBottomsheet";
import LoginBottomsheetContent from "@components/login/LoginBottomsheetContent";

const SettingPage = () => {
  const { openModal } = useModal();

  const logoutModalProps = {
    title: "로그아웃",
    sub: "취소하면 레전드 다시 서야합니다.\n 취소하면 레전드 다시 서야합니다.",
    primaryButton: {
      children: "로그아웃하기",
    },
    secondButton: {
      children: "취소하기",
    },
  };

  const handleLogoutClick = () => {
    openModal(logoutModalProps);
  };

  // 로그인 바텀 시트 테스트
  const { openBottomsheet } = useBottomsheet();

  const handleOpenBottomSheetButton = () => {
    openBottomsheet({ children: <LoginBottomsheetContent /> });
  };

  const settingItemProps = [
    { title: "로그아웃", onClick: handleLogoutClick },
    { title: "언어설정", onClick: handleOpenBottomSheetButton },
    { title: "이용약관" },
    { title: "1:1 문의" },
    { title: "개발자 정보" },
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
