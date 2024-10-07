import * as S from "./SettingDeleteID.styled";
import useModal from "@hooks/useModal";
import { usePostDeleteID } from "@hooks/apis/auth";
import useIsLoading from "@hooks/useIsLoading";
import { useEffect } from "react";

const SettingDeleteID = () => {
  const { openModal } = useModal();
  const { mutate: postDeleteID, isPending } = usePostDeleteID();

  const { setLoadings } = useIsLoading();

  useEffect(() => {
    setLoadings({ isFullLoading: isPending });
  }, [isPending]);

  const handleDeleteIDClick = () => {
    openModal({
      title: "회원탈퇴",
      sub: "취소하면 레전드 다시 서야합니다.\n 취소하면 레전드 다시 서야합니다.",
      primaryButton: {
        children: "회원탈퇴하기",
        onClick: handleDeleteID,
      },
      secondButton: {
        children: "취소하기",
      },
    });
  };

  const handleDeleteID = async () => {
    postDeleteID();
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
