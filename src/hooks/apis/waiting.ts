import { useQuery } from "@tanstack/react-query";

import { WAITING_QUERY_KEY } from "@apis/domains/waiting/queries";
import {
  getNowWaitings,
  getWaiting,
  GetWaitingRequest,
  getWaitings,
} from "@apis/domains/waiting/apis";

export const useGetWaiting = ({ ...props }: GetWaitingRequest) => {
  return useQuery({
    queryKey: [WAITING_QUERY_KEY.WAITING],
    queryFn: () => getWaiting(props),
  });
};

export const useGetWaitings = () => {
  return useQuery({
    queryKey: [WAITING_QUERY_KEY.WAITINGS],
    queryFn: () => getWaitings(),
  });
};

export const useGetNowWaitings = (isLogin: boolean) => {
  return useQuery({
    queryKey: [WAITING_QUERY_KEY.NOW_WAITINGS],
    queryFn: () => getNowWaitings(),
    enabled: isLogin,
  });
};
