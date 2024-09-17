import * as S from "./WaitingDetailCaution.styled";

interface WaitingDetailCautionItemProps {
  content: string;
}

const WaitingDetailCautionItem = ({
  content,
}: WaitingDetailCautionItemProps) => {
  return (
    <S.WaitingDetailCautionItemWrapper>
      <S.WaitingDetailCautionItemImg />
      <S.WaitingDetailCautionItemContent>
        {content}
      </S.WaitingDetailCautionItemContent>
    </S.WaitingDetailCautionItemWrapper>
  );
};

export default WaitingDetailCautionItem;
