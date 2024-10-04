import { useQuery } from "@tanstack/react-query";

import { WAITING_DETAIL_QUERY_KEY } from "@apis/domains/waitingDetail/queries";
import { getWaitingDetail } from "@apis/domains/waitingDetail/apis";

export const useGetWaitingDetail = (waitingID: number | null) => {
  return useQuery({
    queryKey: [WAITING_DETAIL_QUERY_KEY.WAITING_DETAIL],
    queryFn: () => getWaitingDetail({ waitingID: waitingID! }),
  });
};
