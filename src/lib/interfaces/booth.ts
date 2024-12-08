import { BoothStatus, WaitingStatus } from "@linenow-types/status";

export interface BoothImage {
  image: string;
}

export interface Menu {
  name: string;
  price: string;
}

export interface Booth {
  boothID: number;
  name: string;
  description?: string;
  location: string;
  caution: string;

  images: BoothImage[];
  menu: Menu[];

  isOperated: BoothStatus;

  openTime: string;
  closeTime: string;

  waitingCount: number;
  totalWaitingTeams: number;
  waitingTeamsAhead: number;

  isWaiting: boolean;
  waitingID?: number;
  waitingStatus: WaitingStatus;
}

export interface BoothBrief
  extends Pick<Booth, "boothID" | "name" | "description" | "location"> {
  thumbnail: string;
}

export interface Menu {
  name: string;
  price: string;
}
