import { httpClient } from "@/src/api/httpClient";
import { SearchPhotosResponse } from "@/src/models/search";

interface SearchParams {
  query: string;
}
export const searchPhotos = async ({ query }: SearchParams) => {
  if (!query) return;
  const res = await httpClient<SearchPhotosResponse>({
    method: "GET",
    url: `/search/photos`,
    params: {
      query,
    },
  });
  console.log("@@ res", res);
  return res.data;
};

export const searchAll = async ({ query }: SearchParams) => {
  if (!query) return;
  const res = await httpClient<SearchPhotosResponse>({
    method: "GET",
    url: `/search`,
    params: {
      query,
    },
  });
  return res.data;
};
