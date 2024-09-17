import { forwardRef } from "react";
import * as S from "./MainBoothList.styled";
import BoothCard from "@components/boothCard/BoothCard";
import Chip from "@components/chip/Chip";

const MainBoothList = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <S.MainBoothListScrollContainer ref={ref}>
      <BoothCard
        chip={
          <>
            <Chip scheme="lime">대기중</Chip>
            <Chip scheme="blueLight">대기 12 팀</Chip>
          </>
        }
        to="/waiting/1"
      />
      <BoothCard
        chip={
          <>
            <Chip scheme="lime">대기중</Chip>
            <Chip scheme="blueLight">대기 12 팀</Chip>
          </>
        }
        to="/waiting/1"
      />
      <BoothCard
        chip={
          <>
            <Chip scheme="lime">대기중</Chip>
            <Chip scheme="blueLight">대기 12 팀</Chip>
          </>
        }
        to="/waiting/1"
      />
      <BoothCard
        chip={
          <>
            <Chip scheme="lime">대기중</Chip>
            <Chip scheme="blueLight">대기 12 팀</Chip>
          </>
        }
        to="/waiting/1"
      />
      <BoothCard
        chip={
          <>
            <Chip scheme="lime">대기중</Chip>
            <Chip scheme="blueLight">대기 12 팀</Chip>
          </>
        }
        to="/waiting/1"
      />
      <div style={{ height: "24px", width: "100%" }} />
    </S.MainBoothListScrollContainer>
  );
});

export default MainBoothList;
