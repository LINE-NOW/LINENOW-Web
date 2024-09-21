import { http, HttpResponse } from "msw";

//dummy
import {
  dummyWaitingMainResponse,
  dummyWaitingResponse,
} from "./dummy/waitings";

export const handlers = [
  http.get("/api/v1/waitings", () => {
    return HttpResponse.json(dummyWaitingResponse);
  }),
  http.get("/api/v1/waitings/main", () => {
    return HttpResponse.json(dummyWaitingMainResponse);
  }),
];
