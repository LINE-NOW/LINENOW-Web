import { BoothStatus, WaitingStatus } from "@linenow-types/status";

export interface Image {
  image: string;
}

// Booth 인터페이스 정의
export interface Booth {
  id: number;
  name?: string;
  description?: string;
  location?: string;
  caution?: string;
  is_operated: BoothStatus;
  images?: Image[];
  menu?: { name: string; price: number }[];
  open_time: string;
  close_time?: string;
  waiting_count?: number;
  is_waiting?: boolean;
  waiting_status?: WaitingStatus;
  waiting_id?: number;
  total_waiting_teams?: number;
  waiting_teams_ahead?: number;
}

// GetBoothResponse 함수 정의
export const GetBoothResponse = (response: Booth): Booth => {
  return {
    id: response.id,
    name: response.name,
    description: response.description,
    location: response.location,
    caution: response.caution,
    images: response.images || [],
    menu:
      response.menu?.map((item) => ({
        name: item.name,
        price: item.price,
      })) || [],
    open_time: response.open_time,
    close_time: response.close_time,
    waiting_count: response.waiting_count,
    is_waiting: response.is_waiting,
    waiting_status: response.waiting_status,
    is_operated: response.is_operated,
    waiting_id: response.waiting_id,
    total_waiting_teams: response.total_waiting_teams,
    waiting_teams_ahead: response.waiting_teams_ahead,
  };
};
