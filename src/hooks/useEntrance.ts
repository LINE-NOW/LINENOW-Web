import useBottomsheet from "./useBottomsheet";
import { ReactNode } from "react";
import { entranceBottomsheetAtom } from "@atoms/entrance";
import { useSetAtom } from "jotai";

// boothID의 타입을 string으로 명시
const useEntranceBottomsheet = () => {
  const { openBottomsheet, closeBottomsheet } = useBottomsheet();
  const setEntranceBottomsheet = useSetAtom(entranceBottomsheetAtom);

  // Entrance 바텀시트를 여는 함수
  const openEntrance = (children?: ReactNode) => {
    setEntranceBottomsheet((prev) => ({
      ...prev,
      location: window.location.pathname,
    }));

    openBottomsheet({
      children: children,
    });
  };

  const closeEntrace = () => {
    closeBottomsheet();
    // /api/v1/waitings/{waitingid}/cancel로 취소 요청 처리
  };

  return { openEntrance, closeEntrace };
};

export default useEntranceBottomsheet;
