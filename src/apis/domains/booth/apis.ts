import { getResponse } from "@apis/instance";
import { Booth, GetBoothResponse } from "./_interfaces";

export interface GetBoothRequest {
  boothId: number;
}

export const getBooth = async ({
  boothId,
}: GetBoothRequest): Promise<Booth | null> => {
  const response = await getResponse<Booth>(`/api/v1/booths/${boothId}`);

  return response ? GetBoothResponse(response) : null;
};
