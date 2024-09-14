import * as S from "./MainBoothList.styled";
import IconLabel from "@components/label/IconLabel";

const MainBoothListHeader = () => {
  return (
    <S.MainBoothListHeaderWrapper>
      <IconLabel
        iconPosition={"right"}
        gap={"0.25rem"}
        icon={"drop_gray"}
        iconSize={"1.5rem"}
      >
        <S.MainBoothListHeaderTitleLabel>
          2024년 동국대학교 가을 축제
        </S.MainBoothListHeaderTitleLabel>
      </IconLabel>

      <S.MainBoothListHeaderOptionWrapper>
        <p>5개의 부스</p>
        <IconLabel
          iconPosition={"right"}
          gap={"0.25rem"}
          icon={"down_gray_light"}
          iconSize={"1rem"}
        >
          <p>대기 많은 순</p>
        </IconLabel>
      </S.MainBoothListHeaderOptionWrapper>
    </S.MainBoothListHeaderWrapper>
  );
};

export default MainBoothListHeader;
