import { BoothDetail } from "@interfaces/boothDeatil";

// 저도 gpt가 짜준거에요.. 오해 없으시길 하하,,

export const dummyBoothDetailResponse: BoothDetail[] = [
  {
    boothID: 1,
    name: "멋쟁이사자처럼",
    description: `나는 읽기 쉬운 마음이야
    당신도 쓱 훑고 가셔요
    달랠 길 없는 외로운 마음 있지
    머물다 가셔요
    내게 긴 여운을 남겨줘요
    사랑을, 사랑을 해줘요
    할 수 있다면 그럴 수만 있다면
    새하얀 빛으로 그댈 비춰 줄게요
    그러다 밤이 찾아오면
    우리 둘만의 비밀을 새겨요
    추억할 그 밤 위에 갈피를 꽂고선
    남몰래 펼쳐보아요
    나의 자라나는 마음을
    못 본채 꺾어 버릴 순 없네`,
    location: "동국대학교 명진관",
    isOperated: "운영 중",
    images: [
      {
        image: "/images/image_thumbnail_1.png",
      },
    ],
    menu: ["영심: 2,000원", "영심이: 10,000원", "찬주: 100원"],
    openTime: "2024-09-20T10:27:56",
    closeTime: "2024-09-26T10:27:59",
    waitingCount: 2,
    isWaiting: true,
    waitingStatus: "waiting",
  },
  {
    boothID: 2,
    name: "동대 사자 부스",
    description: "여기는 사자 부스입니다.",
    location: "동국대학교 팔정도",
    isOperated: "운영 중",
    images: [
      {
        image: "/images/image_caution.png",
      },
    ],
    menu: ["사자고기: 50,000원", "사자음료: 5,000원"],
    openTime: "2024-09-21T10:00:00",
    closeTime: "2024-09-27T18:00:00",
    waitingCount: 3,
    isWaiting: true,
    waitingStatus: "waiting",
  },
  {
    boothID: 3,
    name: "부스 3",
    description: "부스 3 설명입니다.",
    location: "동국대학교 신공학관",
    isOperated: "운영 중",
    images: [
      {
        image: "/images/image_thumbnail_1.png",
      },
    ],
    menu: ["아이템 1: 1,000원", "아이템 2: 5,000원"],
    openTime: "2024-09-22T09:00:00",
    closeTime: "2024-09-28T17:00:00",
    waitingCount: 5,
    isWaiting: true,
    waitingStatus: "waiting",
  },
  {
    boothID: 4,
    name: "부스 4",
    description: "부스 4 설명입니다.",
    location: "동국대학교 원흥관",
    isOperated: "운영 중",
    images: [
      {
        image: "/images/image_caution.png",
      },
    ],
    menu: ["메뉴1: 10,000원", "메뉴2: 15,000원"],
    openTime: "2024-09-23T11:00:00",
    closeTime: "2024-09-29T20:00:00",
    waitingCount: 0,
    isWaiting: false,
    waitingStatus: "canceled",
  },
];
