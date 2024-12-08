// api method
import { getResponse } from "@apis/instance";

// types
import { Booth } from "@interfaces/booth";
import { GetBoothResponse, transformGetBoothResponse } from "./_interfaces";

// get booth : - 부스 상세
export interface GetBoothRequest {
  boothID: number;
}

export const getBooth = async ({
  ...props
}: GetBoothRequest): Promise<Booth | null> => {
  const response = await getResponse<GetBoothResponse>(
    `/api/v1/booths/${props.boothID}`
  );

  return response ? transformGetBoothResponse(response) : null;
};
