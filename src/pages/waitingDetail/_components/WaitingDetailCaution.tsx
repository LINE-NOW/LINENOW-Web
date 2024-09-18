import * as S from "./WaitingDetailCaution.styled";
import WaitingDetailCautionItem from "./WaitingDetailCautionItem";

const WaitingDetailCaution = () => {
  const contents = [
    {
      text: "대기가 1팀이 남은 경우 문자 알림이가요.\n알림 이후, 3분 내로 대기 확정을 해주세요.\n대기가 취소됩니다.",
      imgSrc: "/images/image_caution.png",
    },
    {
      text: "대기가 1팀이 남은 경우 문자 알림이가요.\n알림 이후, 3분 내로 대기 확정을 해주세요.\n대기가 취소됩니다.",
      imgSrc: "/images/image_caution.png",
    },
    {
      text: "대기가 1팀이 남은 경우 문자 알림이가요.\n알림 이후, 3분 내로 대기 확정을 해주세요.\n대기가 취소됩니다.",
      imgSrc: "/images/image_caution.png",
    },
  ];

  return (
    <S.WaitingDetailCautionWrapper>
      <S.WaitingDetailCautionTitle>
        라인나우 유의사항
      </S.WaitingDetailCautionTitle>
      <S.WaitingDetailCautionItemContainer>
        {contents.map((content, index) => (
          <WaitingDetailCautionItem
            key={index}
            content={content.text}
            imgSrc={content.imgSrc}
          />
        ))}
      </S.WaitingDetailCautionItemContainer>
    </S.WaitingDetailCautionWrapper>
  );
};

export default WaitingDetailCaution;
