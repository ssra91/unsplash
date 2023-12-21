import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { getPhotosId } from "@/src/api/photos";
import Dot from "@/src/components/Dot";
import PhotosRelated from "@/src/views/PhotoDetail/components/PhotosRelated";

interface Props {
  id: string;
}
const PhotoDetail = ({ id }: Props) => {
  const { data, isLoading } = useQuery(["photos", id], () => getPhotosId(id), {
    cacheTime: 1000 * 60 * 30,
    staleTime: 1000 * 60 * 30,
  });

  if (isLoading) return <Dot type="absolute" />;
  return (
    <Container>
      <img src={data?.urls.regular} alt={data?.alt_description} />
      <PhotosRelated id={id} />
    </Container>
  );
};

const Container = styled.div`
  .btn-close {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`;

export default PhotoDetail;
