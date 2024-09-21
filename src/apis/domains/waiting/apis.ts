// api method
import { getResponse } from "@apis/instance";

// types
import { WaitingStatus } from "@linenow-types/status";

// get waiting : - 나의 대기 상세(줄서기 상세)
export interface GetWaitingRequest {
  waitingID: number;
}

interface GetWaitingResponse {
  id: number;
  booth: GetWaitingResponseBooth;
  partySize: number;
  waitingStatus: WaitingStatus;
  readyToConfirmAt?: string;
  confirmedAt?: string;
  canceledAt?: string;
}

interface GetWaitingResponseBooth {
  boothID: number;
  name: string;
  description: string;
  location: string;
}

export const getWaiting = async ({
  ...props
}: GetWaitingRequest): Promise<GetWaitingResponse | null> => {
  return getResponse(`/api/v1/waitings/${props.waitingID}`);
};

// get waitings : - 나의 대기 리스트
export interface GetWaitingsResponse extends Array<GetWaitingResponse> {}

export const getWaitings = async (): Promise<GetWaitingsResponse | null> => {
  return getResponse(`/api/v1/waitings`);
};
