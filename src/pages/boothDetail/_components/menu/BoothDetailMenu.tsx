import { Title } from "../common/style";
import * as S from "./BoothDetailMenu.styled";

interface MenuItem {
  name: string;
  price: string;
}

interface BoothDetailMenuProps {
  menuInfo: MenuItem[];
}

export const BoothDetailMenu = ({ menuInfo }: BoothDetailMenuProps) => {
  return (
    <S.BoothDetailMenuLayout>
      <Title>메뉴</Title>
      <S.BoothDetailMenuWrapper>
        {menuInfo.map((menu, index) => (
          <S.BoothDetailMenuArticleWrapper key={index}>
            <S.BoothDetailMenuArticle>{menu.name}</S.BoothDetailMenuArticle>
            <S.BoothDetailMenuArticle>{menu.price}</S.BoothDetailMenuArticle>
          </S.BoothDetailMenuArticleWrapper>
        ))}
      </S.BoothDetailMenuWrapper>
    </S.BoothDetailMenuLayout>
  );
};
