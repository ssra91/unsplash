import { httpClient } from "@/src/api/httpClient";
import { TTopicsItem } from "@/src/models/topics";

interface GetTopicsParams {
  orderBy?: "featured" | "latest" | "oldest" | "position";
  page?: number;
  perPage?: number;
}
export const getTopics = async ({
  page = 1,
  perPage = 10,
  orderBy = "featured",
}: GetTopicsParams = {}) => {
  const res = await httpClient<TTopicsItem[]>({
    method: "GET",
    url: `/topics`,
    params: {
      page,
      per_page: perPage,
      order_by: orderBy,
    },
  });
  console.log("@@ res", res);
  return res.data;
};
