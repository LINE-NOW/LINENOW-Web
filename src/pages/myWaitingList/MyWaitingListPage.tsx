import { useEffect, useState } from "react";

//components
import * as S from "./MyWaitingListPage.styled";
import WaitingCard from "@components/waitingCard/WaitingCard";

// types
import { Waiting } from "@interfaces/waiting";
// dummy

import { useGetWaitings } from "@hooks/apis/waiting";

const MyWaitingListPage = () => {
  const { data, isLoading, isError } = useGetWaitings();
  const [waitings, setWaitings] = useState<Waiting[]>([]);

  useEffect(() => {
    setWaitings(data || []);
  }, [isLoading, isError, data]);

  return (
    <S.MyWaitingListPageWrapper>
      {waitings.map((item, index) => (
        <WaitingCard
          key={index}
          waiting={item}
          targetTime={item.readyToConfirmAt}
        />
      ))}
    </S.MyWaitingListPageWrapper>
  );
};

export default MyWaitingListPage;
