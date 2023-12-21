import { httpClient } from "@/src/api/httpClient";
import { TPhotoItem } from "@/src/models/photos";

interface GetPhotosParams {
  orderBy?: "latest" | "oldest" | "popular";
  page?: number;
  perPage?: number;
}
export const getPhotos = async ({
  page = 1,
  perPage = 10,
  orderBy = "popular",
}: GetPhotosParams = {}) => {
  const res = await httpClient<TPhotoItem[]>({
    method: "GET",
    url: `/photos`,
    params: {
      page,
      per_page: perPage,
      order_by: orderBy,
    },
  });
  console.log("@@ res", res);
  return res.data;
};

export const getPhotosId = async (id: string) => {
  const res = await httpClient<TPhotoItem>({
    method: "GET",
    url: `photos/${id}`,
  });
  return res.data;
};

export const getRelatedPhotos = async (id: string) => {
  const res = await httpClient<TPhotoItem[]>({
    method: "GET",
    url: `/photos/${id}/related`,
  });
  return res.data;
};
