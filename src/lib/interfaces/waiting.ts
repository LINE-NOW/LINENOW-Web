import { WaitingSatus } from "@types/status";
import { BoothBrief } from "@interfaces/booth";

export interface Waiting {
  waitingID: number;
  waitingCount?: number;

  booth: BoothBrief;
  partySize: number;

  waitingStatus: WaitingSatus;
  readyToConfirmAt?: string;
  confirmedAt?: string;
  canceledAt?: string;
}
