import * as S from "./WaitingDetailCaution.styled";
import WaitingDetailCautionItem from "./WaitingDetailCautionItem";

const WaitingDetailCaution = () => {
  const contents = [
    {
      text: "대기 차례가 오면 카카오톡 알림이 발송됩니다.\n3분 이내에 반드시 ‘입장 확정’을 눌러주세요.\n미확정 시에 대기가 자동 취소됩니다.",
      imgSrc: "/images/image_caution.png",
    },
    {
      text: "입장 확정 시 부스 입장 가능 시간이 부여됩니다.\n반드시 10분 이내에 부스로 입장해주세요.\n10분이 지나면 입장이 제한됩니다.",
      imgSrc: "/images/image_caution.png",
    },
  ];

  return (
    <S.WaitingDetailCautionWrapper>
      <S.WaitingDetailCautionTitle>
        라인나우 대기 줄서기 유의사항
        <S.WaitingDetailCautionSubTitle>
          <span>
            입장 미확정 또는 입장 시간을 준수하지 않으면 대기 줄서기가 자동
            취소됩니다.
          </span>{" "}
          아래 유의사항을 꼭 읽어주세요.
        </S.WaitingDetailCautionSubTitle>
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
