import { WaitingStatus } from "@linenow-types/status";
import { BoothBrief } from "@interfaces/booth";

export interface Waiting {
  waitingID?: number;
  waitingStatus?: WaitingStatus;
  waitingTeamsAhead?: number;
  waitingCount?: number;

  party_size?: number;

  confirmDueTime?: string;
  arrivalarrivalDueTime?: string;

  booth?: BoothBrief;

  // registeredAt: string;
  readyToConfirmAt?: string;
  // confirmedAt?: string;
  // canceledAt?: string;
}
