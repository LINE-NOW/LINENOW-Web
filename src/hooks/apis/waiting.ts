import { useMutation, useQuery } from "@tanstack/react-query";

import { WAITING_QUERY_KEY } from "@apis/domains/waiting/queries";
import {
  getNowWaitings,
  getWaiting,
  GetWaitingRequest,
  getWaitings,
} from "@apis/domains/waiting/apis";

import { postWaitingCancel } from "@apis/domains/waitingCancel/apis";
import useModal from "@hooks/useModal";

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

export const useGetNowWaitings = (isLogin: boolean, query?: string) => {
  return useQuery({
    queryKey: [WAITING_QUERY_KEY.NOW_WAITINGS, query],
    queryFn: () => getNowWaitings(),
    enabled: isLogin,
  });
};

export const usePostWaitingCancel = () => {
  const { closeModal } = useModal();
  return useMutation({
    mutationKey: ["waiting_cancel"],
    mutationFn: (waitingID: number) =>
      postWaitingCancel({ waitingID: waitingID }),
    onSuccess: () => {
      history.go(0);
      closeModal();
    },
    onError: () => {
      alert("대기 취소에 실패했어요.\n잠시 후 다시 시도해주세요.");
    },
  });
};
