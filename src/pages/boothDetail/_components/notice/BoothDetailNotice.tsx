import * as S from "./BoothDetailNotice.styled";
import { Title } from "../common/style";

interface BoothDetailNoticeProps {
  article: string;
}

export const BoothDetailNotice = ({ article }: BoothDetailNoticeProps) => {
  return (
    <S.BoothDetailNoticeWrapper>
      <Title>부스 유의사항</Title>
      <S.BoothDetailNoticeArticle>{article}</S.BoothDetailNoticeArticle>
    </S.BoothDetailNoticeWrapper>
  );
};
