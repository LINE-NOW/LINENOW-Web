import { delay, http } from "msw";

// dummy 데이터 import
import {
  dummyNowWaitingsResponse,
  dummyWaitingsResponse,
} from "./dummy/waitings";
import { dummyBoothListResponse } from "./dummy/boothList";
import { dummyBoothResponse } from "./dummy/booth";

const COMMON_DELAY = 0;

const getDelayedResponse = (responseData: any) => {
  return async () => {
    await delay(COMMON_DELAY);
    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
};

interface RegisterWaitingRequest {
  party_size: number;
}

export const handlers = [
  http.get("/api/v1/waitings", getDelayedResponse(dummyWaitingsResponse)),
  http.get(
    "/api/v1/waitings/now-waitings",
    getDelayedResponse(dummyNowWaitingsResponse)
  ),
  http.get("/api/v1/booths", getDelayedResponse(dummyBoothListResponse)),
  http.get(`/api/v1/booths/:boothId`, getDelayedResponse(dummyBoothResponse)),

  http.post(
    "/api/v1/waitings/:boothId/register",
    async ({ request, params }) => {
      const { boothId } = params;

      // 요청 본문에서 party_size 가져오기
      const requestBody = (await request.json()) as RegisterWaitingRequest;

      if (typeof requestBody.party_size !== "number") {
        return new Response(
          JSON.stringify({
            status: "error",
            message: "Invalid request body",
            code: 400,
            data: null,
          }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      return new Response(
        JSON.stringify({
          status: "success",
          message: "대기 줄서기 등록 완료",
          code: 200,
          data: {
            id: 1,
            booth: Number(boothId),
            username: "user123",
            party_size: requestBody.party_size,
            waiting_status: "waiting",
            ready_to_confirm_at: null,
            confirmed_at: null,
            canceled_at: null,
          },
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  ),
];
