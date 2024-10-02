import { WaitingStatus } from "@linenow-types/status";

export interface BoothList {
  id: number;
  name: string;
  description: string;
  location: string;
  // is_operated: Choice(operating, not_started, finished),
  thumbnail: string;
  waiting_count: number;
  is_waiting: boolean;
  waiting_status: WaitingStatus | null;
}

export const GetBoothListResponse = (response: BoothList) => {
  return {
    id: response.id,
    name: response.name,
    description: response.description,
    location: response.location,
    thumbnail: response.thumbnail,
    waiting_count: response.waiting_count,
    is_waiting: response.is_waiting,
    waiting_status: response.waiting_status,
  };
};
