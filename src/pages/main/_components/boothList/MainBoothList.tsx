import { forwardRef } from "react";
import * as S from "./MainBoothList.styled";
import BoothCard from "@components/boothCard/BoothCard";

const MainBoothList = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <S.MainBoothListScrollContainer ref={ref}>
      <BoothCard />
      <BoothCard />
      <BoothCard />
      <BoothCard />
      <BoothCard />
      <div style={{ height: "24px", width: "100%" }} />
    </S.MainBoothListScrollContainer>
  );
});

export default MainBoothList;
