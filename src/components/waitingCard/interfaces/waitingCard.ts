import { WaitingStatus } from "@linenow-types/status";

export interface GetWaitingsResponse {
  waitings: GetWaitingsResponseData[];
}

export interface GetWaitingsResponseData {
  waitingID: number;
  waitingCount?: number;

  booth: Booth;
  partySize: number;

  waitingStatus: WaitingStatus;
  readyToConfirmAt?: string;
  confirmedAt?: string;
  canceledAt?: string;
}
