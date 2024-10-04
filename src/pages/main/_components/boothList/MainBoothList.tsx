import { forwardRef } from "react";
import * as S from "./MainBoothList.styled";
import BoothCardMain from "@components/boothCard/boothCardMain";
import { BoothList } from "@apis/domains/boothList/_interfaces";
import Spinner from "@components/spinner/Spinner";

interface MainBoothListProps {
  boothList?: BoothList[];
  isLoading: boolean;
}

const MainBoothList = forwardRef<HTMLDivElement, MainBoothListProps>(
  ({ boothList = [], isLoading }: MainBoothListProps, ref) => {
    return isLoading ? (
      <Spinner />
    ) : (
      <S.MainBoothListScrollContainer ref={ref}>
        {boothList?.map((booth: BoothList) => (
          <BoothCardMain key={booth.id} booth={booth} />
        ))}
      </S.MainBoothListScrollContainer>
    );
  }
);

export default MainBoothList;
