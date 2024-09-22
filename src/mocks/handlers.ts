import { delay, http, HttpResponse } from "msw";

//dummy
import {
  dummyWaitingMainResponse,
  dummyWaitingResponse,
} from "./dummy/waitings";

export const handlers = [
  http.get("/api/v1/waitings", async () => {
    await delay(100000);
    return HttpResponse.json(dummyWaitingResponse);
  }),
  http.get("/api/v1/waitings/main", () => {
    return HttpResponse.json(dummyWaitingMainResponse);
  }),
];
