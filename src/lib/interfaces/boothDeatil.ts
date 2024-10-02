import { WaitingStatus } from "@linenow-types/status";

export interface BoothImage {
  image: string;
}

export interface Menu {
  item: string;
  price: string;
}

export interface BoothDetail {
  boothID: number;
  name: string;
  description?: string;
  location: string;
  isOperated: string;
  images: BoothImage[];
  menu: string[];
  openTime: string;
  closeTime: string;
  waitingCount: number;
  isWaiting: boolean;
  waitingStatus: WaitingStatus;
}
