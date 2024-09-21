import { useQuery } from "@tanstack/react-query";

import { WAITING_QUERY_KEY } from "@apis/domains/waiting/queries";
import { getWaiting, GetWaitingRequest } from "@apis/domains/waiting/apis";

export const useGetWaiting = ({ ...props }: GetWaitingRequest) => {
  return useQuery({
    queryKey: [WAITING_QUERY_KEY.WAITING],
    queryFn: () => getWaiting(props),
  });
};
