import { TPhotoItem } from "@/src/models/photos";

export interface SearchPhotosResponse {
  total: number;
  total_pages: number;
  results: TPhotoItem[];
}
