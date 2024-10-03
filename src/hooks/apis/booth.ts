import { useQuery } from "@tanstack/react-query";

import { BOOTH_QUERY_KEY } from "@apis/domains/booth/queries";
import { getBooth } from "@apis/domains/booth/apis";

export const useGetBooth = (boothId: number | null) => {
  return useQuery({
    queryKey: [BOOTH_QUERY_KEY.BOOTH, boothId],
    queryFn: () => getBooth({ boothId: boothId! }),
    enabled: boothId !== null,
  });
};
