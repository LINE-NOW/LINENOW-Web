import { Waiting } from "@interfaces/waiting";
import { WaitingStatus } from "@linenow-types/status";

export interface GetWaitingResponse {
  id: number;
  booth: Booth;
  party_size: number;
  waiting_status: WaitingStatus;
  waiting_count: number;
  ready_to_confirm_at?: string;
  confirmed_at?: string;
  canceled_at?: string;
}

interface Booth {
  booth_id: number;
  name: string;
  description: string;
  location: string;
}

export interface GetWaitingsResponse extends Array<GetWaitingResponse> {}

export const transformGetWaitingResponse = (
  response: GetWaitingResponse
): Waiting => {
  return {
    waitingID: response.id,
    waitingStatus: response.waiting_status,
    readyToConfirmAt: response.ready_to_confirm_at,
    confirmedAt: response.confirmed_at,
    canceledAt: response.canceled_at,
    waitingCount: response.waiting_count,
    partySize: response.party_size,
    booth: {
      boothID: response.booth.booth_id,
      name: response.booth.name,
      location: response.booth.location,
    },
  };
};

export const transformGetWaitingsResponse = (
  response: GetWaitingsResponse
): Waiting[] => {
  return response.map(transformGetWaitingResponse);
};
