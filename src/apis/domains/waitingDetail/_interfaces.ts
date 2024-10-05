import { WaitingStatus } from "@linenow-types/status";

export interface WaitingDetail {
  id?: number;
  username?: string;
  booth: {
    booth_id?: number;
    name?: string;
    description: string;
    location: string;
    thumbnail?: string;
  };
  party_size?: number;
  waiting_status?: WaitingStatus;
  registered_at?: string | null;
  ready_to_confirm_at?: string | null;
  confirmed_at?: string | null;
  canceled_at?: string | null;
  waiting_teams_ahead?: number;
  total_waiting_teams?: number;
  confirm_remaining_time?: "00:00";
  arrival_remaining_time?: "00:00";
}

export const GetWaitingDetailResponse = (
  response: WaitingDetail
): WaitingDetail => {
  return {
    id: response.id,
    username: response.username,
    booth: {
      booth_id: response.booth?.booth_id,
      name: response.booth?.name,
      description: response.booth?.description,
      location: response.booth?.location,
      thumbnail: response.booth?.thumbnail,
    },
    party_size: response.party_size,
    waiting_status: response.waiting_status,
    registered_at: response.registered_at,
    ready_to_confirm_at: response.ready_to_confirm_at,
    confirmed_at: response.confirmed_at,
    canceled_at: response.canceled_at,
    waiting_teams_ahead: response.waiting_teams_ahead,
    total_waiting_teams: response.total_waiting_teams,
    confirm_remaining_time: response.confirm_remaining_time,
    arrival_remaining_time: response.arrival_remaining_time,
  };
};
