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
  confirm_due_time?: "00:00";
  arrival_due_time?: "00:00";
}
