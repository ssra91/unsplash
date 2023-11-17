import styled from "@emotion/styled";
import { TPhotoItem } from "@/src/models/photos";

interface Props {
  data: TPhotoItem[];
}
const PhotosList = ({ data }: Props) => {
  const photosGroups: TPhotoItem[][] = [[], [], []];
  const photoGroupHeight = [0, 0, 0];

  for (let i = 0; i < data.length; i++) {
    const photoItem = data[i];
    const minValue = Math.min(...photoGroupHeight);
    const minHeightIndex = photoGroupHeight.indexOf(minValue);
    photosGroups[minHeightIndex].push(photoItem);
    photoGroupHeight[minHeightIndex] += photoItem.height / photoItem.width;
  }

  return (
    <Container>
      {photosGroups.map((group, groupIndex) => (
        <div key={groupIndex}>
          {group.map(({ id, urls, alt_description }) => (
            <img key={id} src={urls.regular} alt={alt_description} />
          ))}
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  img {
    width: 100%;
    object-fit: cover;
    margin-bottom: 20px;
  }
`;

export default PhotosList;
