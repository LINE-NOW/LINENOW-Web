// component
import ButtonLayout from "@components/button/ButtonLayout";
import Button from "@components/button/Button";

// atom
import { useSetAtom } from "jotai";
import { modalAtom } from "@atoms/modal";
import { bottomsheetAtom } from "@atoms/bottomsheet";

const MainPage = () => {
  const setModal = useSetAtom(modalAtom);
  const openModal = () => {
    setModal({
      isOpen: true,
      title: "예시 모달입니다",
      sub: "예시 모달에 대한 내용입니다.\n예시...",
      secondButton: { children: "이전으로" },
      primaryButton: { children: "안녕", disabled: true },
    });
  };

  const setBottomsheet = useSetAtom(bottomsheetAtom);
  const openBottomsheet = () => {
    setBottomsheet({
      isOpen: true,
      children: <Content />,
    });
  };

  const Content = () => {
    return (
      <ButtonLayout $col={1}>
        <Button onClick={openModal}>모달 오픈 버튼</Button>
      </ButtonLayout>
    );
  };
  return (
    <div>
      <Button onClick={openBottomsheet} scheme="lime">
        바텀시트 오픈 버튼
      </Button>
    </div>
  );
};

export default MainPage;
