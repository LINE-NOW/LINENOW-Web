import { useRef } from "react";

import * as S from "./MainPage.styled";
import MainNavigation from "./_components/navigation/MainNavigation";
import MainBoothListHeader from "./_components/boothList/MinaBoothListHeader";
import MainBoothList from "./_components/boothList/MainBoothList";

// hook
import useMainNavigation from "@pages/main/_hooks/useMainNavigation";

// constant
import { MAIN_FIXED_COMPONENTS_HEIGHT } from "@constants/style";

import { useCheckWaitingStatus } from "@hooks/useCheckWaitingStatus";

const MainPage = () => {
  const mainBoothListRef = useRef<HTMLDivElement>(null);
  const isFold = useMainNavigation(mainBoothListRef);
  useCheckWaitingStatus();
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
