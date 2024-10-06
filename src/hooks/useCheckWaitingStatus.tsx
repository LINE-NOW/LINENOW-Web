import { useEffect } from "react";
import { useGetNowWaitings } from "./apis/waiting";
import useEntranceBottomsheet from "./useEntrance";
import { Entrance } from "@components/entrance/Entrance";
import { Waiting } from "@interfaces/waiting"; // Waiting 타입을 가져와 사용
import { useLocation } from "react-router-dom";
import useAuth from "./useAuth";

export const useCheckWaitingStatus = () => {
  const { isLogin } = useAuth();
  const { data: nowWaitings } = useGetNowWaitings(isLogin);

  const { openEntrance } = useEntranceBottomsheet();
  const location = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    if (nowWaitings && nowWaitings.length > 0) {
      nowWaitings.forEach((waiting: Waiting) => {
        // 경로에 따라 다르게 처리
        let redirectPath = "";
        if (location.pathname.includes("/booth")) {
          redirectPath = `/booth/${waiting.booth?.boothID}`;
        } else if (location.pathname.includes("/my-waiting")) {
          redirectPath = `/my-waiting`;
        } else if (location.pathname === "/") {
          redirectPath = `/`;
        } else {
          redirectPath = "/";
        }

        // waitingStatus가 'ready_to_confirm'일 경우 바텀시트 열기
        if (waiting.waitingStatus === "ready_to_confirm" && waiting.booth) {
          openEntrance(
            <Entrance boothID={waiting.booth.boothID} nextPath={redirectPath} />
          );
        }
      });
    } else {
      openEntrance(<Entrance boothID={1} nextPath={"booth/1"} />);
    }
  }, [nowWaitings]); // 경로와 대기 상태에 따라 재실행
};
