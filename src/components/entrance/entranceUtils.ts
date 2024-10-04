import { ModalProps } from "@components/modal/Modal";
import { useState, useEffect } from "react";

export const getThreeMinutesLater = () => {
  const [targetDate, setTargetDate] = useState(String(new Date()));

  useEffect(() => {
    const now = new Date();
    const threeMinutesLater = new Date(
      now.getTime() + 3 * 60 * 1000 + 1 * 1000
    );

    const year = threeMinutesLater.getFullYear();
    const month = String(threeMinutesLater.getMonth() + 1).padStart(2, "0");
    const day = String(threeMinutesLater.getDate()).padStart(2, "0");
    const hours = String(threeMinutesLater.getHours()).padStart(2, "0");
    const minutes = String(threeMinutesLater.getMinutes()).padStart(2, "0");
    const seconds = String(threeMinutesLater.getSeconds()).padStart(2, "0");

    setTargetDate(`${year}-${month}-${day}T${hours}:${minutes}:${seconds}`);
  }, []);

  return targetDate;
};

export default getThreeMinutesLater;

export const handleConfirmEntry = (
  openModal: (modalProps: Omit<ModalProps, "isOpen">) => void, // openModal 전달
  closeModal: () => void,
  closeEntrace: () => void,
  navigate: (path: string) => void,
  nextPath: string
) => {
  openModal({
    title: "다른 대기가 취소돼요",
    sub: "입장을 확정하면 다른 대기는 취소돼요.\n입장을 확정하시겠어요?",
    secondButton: {
      children: "이전으로",
      onClick: () => closeModal(),
    },
    primaryButton: {
      children: "입장 확정하기",
      scheme: "lime",
      onClick: () => {
        closeModal();
        closeEntrace();
        navigate(`${nextPath.startsWith("/") ? nextPath : `/${nextPath}`}`);
      },
    },
  });
};

// 입장 취소 핸들러
export const handleCancelEntry = (
  openModal: (modalProps: Omit<ModalProps, "isOpen">) => void,
  closeModal: () => void,
  closeEntrace: () => void
) => {
  openModal({
    title: "정말 입장을 취소하시겠어요?",
    sub: "입장을 취소하면 현재 줄 서기가 사라져요.\n그래도 취소하실건가요?",
    secondButton: {
      children: "이전으로",
      onClick: () => closeModal(),
    },
    primaryButton: {
      children: "입장 취소하기",
      onClick: () => {
        closeModal();
        closeEntrace();
      },
    },
  });
};
