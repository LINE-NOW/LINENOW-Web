import { forwardRef } from "react";
import * as S from "./MainBoothList.styled";
import BoothCardMain from "@components/boothCard/boothCardMain";

interface BoothData {
  to: string;
  is_waiting: boolean;
  waitingCount: number;
}

const boothData: BoothData[] = [
  { to: "/booth/1", is_waiting: true, waitingCount: 12 },
  { to: "/booth/2", is_waiting: false, waitingCount: 8 },
  { to: "/booth/3", is_waiting: true, waitingCount: 5 },
  { to: "/booth/4", is_waiting: false, waitingCount: 0 },
  { to: "/booth/5", is_waiting: true, waitingCount: 10 },
];

const MainBoothList = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <S.MainBoothListScrollContainer ref={ref} {...props}>
      {" "}
      {boothData.map((booth) => (
        <BoothCardMain
          key={booth.to}
          to={booth.to}
          is_waiting={booth.is_waiting}
          waitingCount={booth.waitingCount}
        />
      ))}
      <div style={{ height: "24px", width: "100%" }} />
    </S.MainBoothListScrollContainer>
  );
});

export default MainBoothList;
