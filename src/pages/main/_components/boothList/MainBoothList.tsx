import { forwardRef } from "react";
import * as S from "./MainBoothList.styled";
import BoothCardMain from "@components/boothCard/boothCardMain";
import { useGetBoothList } from "@hooks/apis/boothList";
import { BoothList } from "@apis/domains/boothList/_interfaces";
import Spinner from "@components/spinner/Spinner";

const MainBoothList = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { data: boothList, isLoading } = useGetBoothList();

  return isLoading ? (
    <Spinner />
  ) : (
    <S.MainBoothListScrollContainer ref={ref} {...props}>
      {boothList?.map((booth: BoothList) => (
        <BoothCardMain key={booth.id} booth={booth} />
      ))}
    </S.MainBoothListScrollContainer>
  );
});

export default MainBoothList;
