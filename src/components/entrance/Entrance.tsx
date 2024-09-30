import Button from "@components/button/Button";
import ButtonLayout from "@components/button/ButtonLayout";
import IconLabel from "@components/label/IconLabel";
import * as S from "./Entrance.styled";

export const Entrance = () => {
  return (
    <S.EntranceWrapper>
      <S.EntranceContentWrapper>
        <S.EntranceTextWrapper>
          <S.EntranceTitle>입장 의사를 확정해주세요!</S.EntranceTitle>
          <S.EntranceDescription>
            3분 내로 응답하지 않으면 입장은 취소돼요. <br />
            입장 의사를 밝혀주세요.
          </S.EntranceDescription>
        </S.EntranceTextWrapper>
        <S.EntranceBoothCardWrapper>
          <S.EntranceBoothDetailWrapper>
            <S.EntranceBoothCardImg
              src={"/images/image_boothCardThumbnail.png"}
            />
            <S.EntranceBoothCardTextWrapper>
              <S.EntrnaceBoothCardTitleWrapper>
                <S.EntranceBoothCardTitleText>4명</S.EntranceBoothCardTitleText>
                <S.EntranceBoothCardTitleText $isGray={true}>
                  ·
                </S.EntranceBoothCardTitleText>
                <S.EntranceBoothCardTitleText>
                  라인나우와 함께하는 축제
                </S.EntranceBoothCardTitleText>
              </S.EntrnaceBoothCardTitleWrapper>
              <S.EntranceBoothSubText>
                축제를 조금 더 알차고 의미 있는 경험으로
              </S.EntranceBoothSubText>
              <IconLabel
                gap={"0.125rem"}
                icon={"location_gray_light"}
                iconSize={"1rem"}
              >
                <S.EntranceLocationLabel>
                  동국대학교 팔정도
                </S.EntranceLocationLabel>
              </IconLabel>
            </S.EntranceBoothCardTextWrapper>
          </S.EntranceBoothDetailWrapper>
        </S.EntranceBoothCardWrapper>
      </S.EntranceContentWrapper>
      <ButtonLayout $col={1}>
        <Button scheme="lime" disabled={false} onClick={() => alert("test")}>
          <span>입장할게요!</span>
          <span>3:00</span>
        </Button>
        <Button
          scheme="grayLight"
          disabled={false}
          shape="outline"
          onClick={() => alert("test1")}
        >
          <span>입장 취소하기</span>
        </Button>
      </ButtonLayout>
    </S.EntranceWrapper>
  );
};

/**
 * 로직이 바텀시트에 이 컴포넌트를 그냥 넘겨주기~
 */
