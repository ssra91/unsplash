import styled from "@emotion/styled";
import { TPhotoItem } from "@/src/models/photos";

interface Props {
  data: TPhotoItem[];
}
const PhotosList = ({ data }: Props) => {
  return (
    <Container>
      {/* eslint-disable-next-line camelcase */}
      {data?.map(({ id, urls, alt_description }) => (
        // eslint-disable-next-line camelcase,@next/next/no-img-element
        <img key={id} src={urls.regular} alt={alt_description} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

export default PhotosList;
