import { GetWaitingsResponse } from "@components/waitingCard/interfaces/WaitingCard";

// GPT 가 만들어준 부스 이름입니다... 오해 없으시길...
export const dummyWaitingsResponse: GetWaitingsResponse = {
  waitings: [
    {
      waitingID: 1,
      waitingCount: 5,
      booth: {
        boothID: 101,
        name: "음식 탐험대",
        location: "서울 광화문",
      },
      partySize: 5,
      waitingStatus: "readyToConfirm",
      readyToConfirmAt: "2025-01-01T00:00:00Z",
      confirmedAt: undefined,
      canceledAt: undefined,
    },
    {
      waitingID: 2,
      waitingCount: 3,
      booth: {
        boothID: 102,
        name: "게임의 왕국",
        location: "서울 신촌",
      },
      partySize: 3,
      waitingStatus: "confirmed",
      readyToConfirmAt: "2025-01-01T00:00:00Z",
      confirmedAt: undefined,
      canceledAt: undefined,
    },
    {
      waitingID: 3,
      waitingCount: 2,
      booth: {
        boothID: 103,
        name: "DIY 아트코너",
        location: "서울 홍대",
      },
      partySize: 2,
      waitingStatus: "canceled",
      readyToConfirmAt: "2025-01-01T00:00:00Z",
      confirmedAt: undefined,
      canceledAt: undefined,
    },
    {
      waitingID: 4,
      waitingCount: 4,
      booth: {
        boothID: 104,
        name: "뮤직 페스티벌",
        location: "서울 잠실",
      },
      partySize: 4,
      waitingStatus: "waiting",
      readyToConfirmAt: "2025-01-01T00:00:00Z",
      confirmedAt: undefined,
      canceledAt: undefined,
    },
    {
      waitingID: 5,
      waitingCount: 6,
      booth: {
        boothID: 105,
        name: "VR 체험존",
        location: "서울 강남",
      },
      partySize: 6,
      waitingStatus: "readyToConfirm",
      readyToConfirmAt: "2025-01-01T00:00:00Z",
      confirmedAt: undefined,
      canceledAt: undefined,
    },
    {
      waitingID: 6,
      waitingCount: 1,
      booth: {
        boothID: 106,
        name: "전통 놀이마당",
        location: "서울 명동",
      },
      partySize: 1,
      waitingStatus: "confirmed",
      readyToConfirmAt: "2025-01-01T00:00:00Z",
      confirmedAt: undefined,
      canceledAt: undefined,
    },
    {
      waitingID: 7,
      waitingCount: 8,
      booth: {
        boothID: 107,
        name: "푸드 트럭 존",
        location: "서울 이태원",
      },
      partySize: 8,
      waitingStatus: "arrived",
      readyToConfirmAt: "2025-01-01T00:00:00Z",
      confirmedAt: undefined,
      canceledAt: undefined,
    },
    {
      waitingID: 8,
      waitingCount: 2,
      booth: {
        boothID: 108,
        name: "체험 부스",
        location: "서울 강북",
      },
      partySize: 2,
      waitingStatus: "canceled",
      readyToConfirmAt: "2025-01-01T00:00:00Z",
      confirmedAt: undefined,
      canceledAt: undefined,
    },
    {
      waitingID: 9,
      waitingCount: 3,
      booth: {
        boothID: 109,
        name: "댄스 챌린지",
        location: "서울 종로",
      },
      partySize: 3,
      waitingStatus: "confirmed",
      readyToConfirmAt: "2025-01-01T00:00:00Z",
      confirmedAt: undefined,
      canceledAt: undefined,
    },
    {
      waitingID: 10,
      waitingCount: 5,
      booth: {
        boothID: 110,
        name: "스포츠 체험존",
        location: "서울 서초",
      },
      partySize: 5,
      waitingStatus: "waiting",
      readyToConfirmAt: "2025-01-01T00:00:00Z",
      confirmedAt: undefined,
      canceledAt: undefined,
    },
  ],
};
