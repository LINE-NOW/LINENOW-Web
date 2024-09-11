import { modalAtom } from "@atoms/modal";
import Button from "@components/button/Button";
import { useSetAtom } from "jotai";

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
  return (
    <div>
      <Button onClick={openModal}>모달 오픈 버튼</Button>
      <Button scheme="lime">바텀시트 오픈 버튼</Button>
    </div>
  );
};

export default MainPage;
