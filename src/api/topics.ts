import { BASE_API_URL } from "@/src/constants";
import { httpClient } from "@/src/api/request";
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
    url: `${BASE_API_URL}/topics`,
    params: {
      page,
      per_page: perPage,
      order_by: orderBy,
    },
  });
  console.log("@@ res", res);
  return res.data;
};
