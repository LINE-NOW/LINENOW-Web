// api method
import { getResponse } from "@apis/instance";

// types
import { GetBoothListResponse, BoothList } from "./_interfaces";

// get boothList : 부스 리스트
export const getBoothList = async (): Promise<BoothList[]> => {
  const response = await getResponse<BoothList[]>(`/api/v1/booths`);

  console.log(response);
  return response ? response.map(GetBoothListResponse) : [];
};
