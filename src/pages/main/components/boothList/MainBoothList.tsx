import BoothCard from "@components/boothCard/BoothCard";
import * as S from "./MainBoothList.styled";
import IconLabel from "@components/label/IconLabel";

const MainBoothList = () => {
  return (
    <S.MainBoothListWrapper>
      {/* 타이틀 */}
      <S.MainBoothListTitleWrapper>
        <IconLabel
          iconPosition={"right"}
          gap={"0.25rem"}
          icon={"drop_gray"}
          iconSize={"1.5rem"}
        >
          <S.MainBoothListTitleLabel>
            2024년 동국대학교 가을 축제
          </S.MainBoothListTitleLabel>
        </IconLabel>
        <S.MainBoothListTitleOptionWrapper>
          <p>5개의 부스</p>
          <IconLabel
            iconPosition={"right"}
            gap={"0.25rem"}
            icon={"down_gray_light"}
            iconSize={"1rem"}
          >
            <p>대기 많은 순</p>
          </IconLabel>
        </S.MainBoothListTitleOptionWrapper>
      </S.MainBoothListTitleWrapper>

      {/* 부스 리스트 스크롤 가능 부분 */}
      <S.MainBoothListScrollContainer>
        <BoothCard />
        <BoothCard />
        <BoothCard />
        <BoothCard />
        <BoothCard />
      </S.MainBoothListScrollContainer>
    </S.MainBoothListWrapper>
  );
};

export default MainBoothList;
