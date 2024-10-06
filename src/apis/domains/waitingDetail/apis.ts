import { getResponse } from "@apis/instance";
import { WaitingDetail } from "@interfaces/waitingDetail";

export interface GetWaitingDetailRequest {
  waitingID: number;
}

export const getWaitingDetail = async ({
  waitingID,
}: GetWaitingDetailRequest): Promise<WaitingDetail | null> => {
  const response = await getResponse<WaitingDetail>(
    `/api/v1/waitings/${waitingID}`
  );
  return response;
};
