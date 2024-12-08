import { Booth } from "@interfaces/booth";
import { BoothStatus, WaitingStatus } from "@linenow-types/status";

interface Image {
  image: string;
}

interface Menu {
  name: string;
  price: string;
}

// Booth 인터페이스 정의
export interface GetBoothResponse {
  id: number;
  name: string;
  description: string;
  location: string;
  caution: string;

  is_operated: BoothStatus;
  images: Image[];
  menu: Menu[];

  open_time: string;
  close_time: string;

  waiting_count: number;
  total_waiting_teams: number;
  waiting_teams_ahead: number;

  is_waiting: boolean;
  waiting_id?: number;
  waiting_status: WaitingStatus;
}

// GetBoothResponse 함수 정의
export const transformGetBoothResponse = (
  response: GetBoothResponse
): Booth => {
  return {
    boothID: response.id,
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
    openTime: response.open_time,
    closeTime: response.close_time,
    waitingCount: response.waiting_count,
    isWaiting: response.is_waiting,
    waitingStatus: response.waiting_status,
    isOperated: response.is_operated,
    waitingID: response.waiting_id,
    totalWaitingTeams: response.total_waiting_teams,
    waitingTeamsAhead: response.waiting_teams_ahead,
  };
};
