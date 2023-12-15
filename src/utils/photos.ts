import { TPhotoItem } from "@/src/models/photos";

export const getPhotosGroup = (data: TPhotoItem[]) => {
  const photosGroups: TPhotoItem[][] = [[], [], []];
  const photoGroupHeight = [0, 0, 0];

  for (let i = 0; i < data.length; i++) {
    const photoItem = data[i];
    const minValue = Math.min(...photoGroupHeight);
    const minHeightIndex = photoGroupHeight.indexOf(minValue);
    photosGroups[minHeightIndex].push(photoItem);
    photoGroupHeight[minHeightIndex] += photoItem.height / photoItem.width;
  }
  return photosGroups;
};
