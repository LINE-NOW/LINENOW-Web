import { WaitingSatus } from "@linenow-types/status";
import { BoothBrief } from "@interfaces/booth";

export interface Waiting {
  waitingID: number;
  waitingStatus: WaitingSatus;

  readyToConfirmAt?: string;
  confirmedAt?: string;
  canceledAt?: string;

  waitingCount?: number;
  partySize: number;

  booth: BoothBrief;
}
