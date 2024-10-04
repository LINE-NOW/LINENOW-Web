import { useQuery } from "@tanstack/react-query";

import { BOOTH_QUERY_KEY } from "@apis/domains/boothList/queries";
import { getBoothList } from "@apis/domains/boothList/apis";

export const useGetBoothList = (ordering: string) => {
  return useQuery({
    queryKey: [BOOTH_QUERY_KEY.BOOTH_LIST, ordering],
    queryFn: () => getBoothList({ ordering }),
  });
};
