import { useQuery } from "@tanstack/react-query";

import { BOOTH_QUERY_KEY } from "@apis/domains/boothList/queries";
import { getBoothList } from "@apis/domains/boothList/apis";

export const useGetBoothList = () => {
  return useQuery({
    queryKey: [BOOTH_QUERY_KEY.BOOTH_LIST],
    queryFn: () => getBoothList(),
  });
};
