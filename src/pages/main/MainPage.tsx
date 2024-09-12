// component
import ButtonLayout from "@components/button/ButtonLayout";
import Button from "@components/button/Button";
import useBottomsheet from "@hooks/useBottomsheet";
import useModal from "@hooks/useModal";

// hook

const MainPage = () => {
  const { openBottomsheet } = useBottomsheet();
  const { openModal } = useModal();

  // 바텀시트를 여는 버튼
  const OpenBottomsheetButton = () => {
    return (
      <Button
        onClick={() =>
          openBottomsheet({ children: <ModalBottomsheetContent /> })
        }
      >
        바텀시트 열기 버튼
      </Button>
    );
  };

  // 바텀시트 내부 요소
  const ModalBottomsheetContent = () => {
    return (
      <>
        <h1>클릭해서 모달을 열어보세요!</h1>
        <Button
          onClick={() =>
            openModal({
              title: "잘하셨습니다.",
              sub: "바텀시트와, 모달을 hook으로 \n손쉽게 관리해봐요.",
            })
          }
        >
          모달 열기 버튼
        </Button>
      </>
    );
  };
  return (
    <div>
      <OpenBottomsheetButton />
    </div>
  );
};

export default MainPage;
