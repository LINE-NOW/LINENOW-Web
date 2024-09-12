import { useRef } from "react";

import * as S from "./MainPage.styled";
import MainNavigation from "./components/navigation/MainNavigation";
import MainBoothListHeader from "./components/boothList/MinaBoothListHeader";
import MainBoothList from "./components/boothList/MainBoothList";

// hook
import useMainNavigation from "@hooks/useMainNavigation";

// constant
import { MAIN_FIXED_COMPONENTS_HEIGHT } from "@constants/style";

const MainPage = () => {
  const mainBoothListRef = useRef<HTMLDivElement>(null);
  const isFold = useMainNavigation(mainBoothListRef);

  return (
    <>
      <S.MainFixedComponentsWrapper>
        <MainNavigation isFold={isFold} />
        <MainBoothListHeader />
      </S.MainFixedComponentsWrapper>

      <S.MainFixedComponentBackgorund
        style={{
          height: `${
            isFold
              ? MAIN_FIXED_COMPONENTS_HEIGHT.fold
              : MAIN_FIXED_COMPONENTS_HEIGHT.unfold
          }`,
        }}
      />

      <MainBoothList ref={mainBoothListRef} />
    </>
  );
};

export default MainPage;
