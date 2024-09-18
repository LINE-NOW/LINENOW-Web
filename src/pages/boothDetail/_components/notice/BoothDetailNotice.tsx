import * as S from "./BoothDetailNotice.styled";
import { Title } from "../common/style";

interface BoothDetailNoticeProps {
  article: string[];
}

export const BoothDetailNotice = ({ article }: BoothDetailNoticeProps) => {
  return (
    <S.BoothDetailNoticeWrapper>
      <Title>부스 유의사항</Title>
      {article.map((text, index) => (
        <S.BoothDetailNoticeArticle key={index}>
          {text}
        </S.BoothDetailNoticeArticle>
      ))}
    </S.BoothDetailNoticeWrapper>
  );
};
