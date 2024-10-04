import { useMutation } from "@tanstack/react-query";
import { PostConfirmRequest, postEntryConfirm } from "@apis/domains/entry/api";

export const usePostConfirm = ({ ...props }: PostConfirmRequest) => {
  return useMutation({
    mutationFn: () => postEntryConfirm(props),
  });
};
