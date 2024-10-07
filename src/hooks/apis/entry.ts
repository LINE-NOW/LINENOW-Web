import { useMutation } from "@tanstack/react-query";
import { PostConfirmRequest, postEntryConfirm } from "@apis/domains/entry/api";
import useModal from "@hooks/useModal";

export const usePostConfirm = ({ ...props }: PostConfirmRequest) => {
  const { closeModal } = useModal();
  return useMutation({
    mutationKey: ["post_confirm"],
    mutationFn: () => postEntryConfirm(props),
    onSuccess: () => {
      closeModal();
      history.go(0);
    },
    onError: () => {
      alert("예상치 못한 오류가 발생했어요.\n잠시 후 다시 시도해주세요.");
    },
  });
};
