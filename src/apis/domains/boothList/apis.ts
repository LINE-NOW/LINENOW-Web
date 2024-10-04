// api method
import { getResponse } from "@apis/instance";

// types
import { GetBoothListResponse, BoothList } from "./_interfaces";

// get boothList : 부스 리스트

interface GetBoothRequest {
  ordering: string;
}
export const getBoothList = async ({
  ordering,
}: GetBoothRequest): Promise<BoothList[]> => {
  const response = await getResponse<BoothList[]>(
    `/api/v1/booths?ordering=${ordering}`
  );

  return response ? response.map(GetBoothListResponse) : [];
};
