import { WaitingSatus } from "@types/status";

export interface GetWaitingsResponse {
  waitings: GetWaitingsResponseData[];
}

export interface GetWaitingsResponseData {
  waitingID: number;
  waitingCount?: number;

  booth: Booth;
  partySize: number;

  waitingStatus: WaitingSatus;
  readyToConfirmAt?: string;
  confirmedAt?: string;
  canceledAt?: string;
}

export interface Booth {
  boothID: number;
  name: string;
  location: string;
}
