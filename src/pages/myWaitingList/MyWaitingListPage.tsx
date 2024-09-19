//components
import * as S from "./MyWaitingListPage.styled";
import WaitingCard from "@components/waitingCard/WaitingCard";

// API
import { dummyWaitingsResponse } from "./dummyWaitingsResponse";

const MyWaitingListPage = () => {
  return (
    <S.MyWaitingListPageWrapper>
      {dummyWaitingsResponse.waitings.map((item, index) => (
        <WaitingCard
          key={index}
          waitingID={item.waitingID}
          waitingCount={item.waitingCount || undefined}
          booth={item.booth}
          partySize={item.partySize}
          waitingStatus={item.waitingStatus}
          targetTime={item.readyToConfirmAt}
        />
      ))}
    </S.MyWaitingListPageWrapper>
  );
};

export default MyWaitingListPage;
