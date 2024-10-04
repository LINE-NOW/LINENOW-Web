import { useRef } from "react";

import * as S from "./MainPage.styled";
import MainNavigation from "./_components/navigation/MainNavigation";
import MainBoothListHeader from "./_components/boothList/MinaBoothListHeader";
import MainBoothList from "./_components/boothList/MainBoothList";

// hook
import useMainNavigation from "@pages/main/_hooks/useMainNavigation";
import { useGetBoothList } from "@hooks/apis/boothList";
import useSortBooths from "./_hooks/useSortBooths";

// constant
import { MAIN_FIXED_COMPONENTS_HEIGHT } from "@constants/style";

import { useCheckWaitingStatus } from "@hooks/useCheckWaitingStatus";

const MainPage = () => {
  const mainBoothListRef = useRef<HTMLDivElement>(null);
  const isFold = useMainNavigation(mainBoothListRef);

  // booth list api
  const {
    sortBoothOptions,
    currentSortBoothOption,
    handleSortBoothOptionChange,
  } = useSortBooths();

  const { data: boothList, isLoading } = useGetBoothList(
    currentSortBoothOption
  );

  useCheckWaitingStatus();
  return (
    <>
      <S.MainFixedComponentsWrapper>
        <MainNavigation isFold={isFold} />
        <MainBoothListHeader
          boothCount={boothList?.length || 0}
          sortBoothOptions={sortBoothOptions}
          currentSortBoothOption={currentSortBoothOption}
          handleSortBoothOptionChange={handleSortBoothOptionChange}
        />
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

      <MainBoothList
        ref={mainBoothListRef}
        boothList={boothList}
        isLoading={isLoading}
      />
    </>
  );
};

export default MainPage;
