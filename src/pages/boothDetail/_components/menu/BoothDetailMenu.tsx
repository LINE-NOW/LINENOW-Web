import { Booth } from "@apis/domains/booth/_interfaces";
import { Title } from "../common/style";
import * as S from "./BoothDetailMenu.styled";

interface BoothDetailContentProps {
  booth: Booth;
}

export const BoothDetailMenu = ({ booth }: BoothDetailContentProps) => {
  return (
    <S.BoothDetailMenuLayout>
      <Title>메뉴</Title>
      <S.BoothDetailMenuWrapper>
        {booth.menu?.map((menu, index) => (
          <S.BoothDetailMenuArticleWrapper key={index}>
            <S.BoothDetailMenuArticle>{menu.name}</S.BoothDetailMenuArticle>
            <S.BoothDetailMenuArticle>
              {menu.price.toLocaleString("ko-KR")}
            </S.BoothDetailMenuArticle>
          </S.BoothDetailMenuArticleWrapper>
        ))}
      </S.BoothDetailMenuWrapper>
    </S.BoothDetailMenuLayout>
  );
};
