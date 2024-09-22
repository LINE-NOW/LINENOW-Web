import { delay, http, HttpResponse } from "msw";

//dummy
import {
  dummyNowWaitingsResponse,
  dummyWaitingsResponse,
} from "./dummy/waitings";

const COMMON_DELAY = 0;

const getDelayedResponse = (responseData: any) => {
  return async () => {
    await delay(COMMON_DELAY);
    return HttpResponse.json(responseData);
  };
};

export const handlers = [
  http.get("/api/v1/waitings", getDelayedResponse(dummyWaitingsResponse)),
  http.get(
    "/api/v1/waitings/now-waitings",
    getDelayedResponse(dummyNowWaitingsResponse)
  ),
];
